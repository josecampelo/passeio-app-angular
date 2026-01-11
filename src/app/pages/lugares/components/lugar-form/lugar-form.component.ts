import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LugarService } from '../../services/lugar.service';
import { CategoriaService } from '../../../categorias/services/categoria.service';
import { EstadosIBGEService } from '../../../../core/services/estados-ibge.service';
import { Lugar } from '../../models/lugar';
import { Categoria } from '../../../categorias/models/categoria';
import { EstadoIBGE } from '../../../../core/models/estado-ibge';

@Component({
  selector: 'app-lugar-form',
  standalone: false,
  templateUrl: './lugar-form.component.html',
  styleUrl: './lugar-form.component.scss'
})
export class LugarFormComponent implements OnInit{
  private formBuilder = inject(FormBuilder);
  private lugarService = inject(LugarService);
  private categoriaService = inject(CategoriaService);
  private estadosIBGEService = inject(EstadosIBGEService);
  private router = inject(Router);

  public formularioLugar!: FormGroup;
  public categorias: Categoria[] = [];
  public estados: EstadoIBGE[] = [];

  public ngOnInit(): void {
    this.criarFormulario();
    this.obterCategorias();
    this.obterEstados();
  }

  private criarFormulario(): void {
    this.formularioLugar = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', [Validators.required]],
      localizacao: ['', [Validators.required]],
      urlFoto: ['', [Validators.required]],
      avaliacao: ['', [Validators.required]]
    });
  }

  private obterCategorias(): void {
    this.categoriaService.listar().subscribe({
      next: (res) => this.categorias = res,
      error: (err) => alert('Ocorreu um erro ao carregar categorias.')
    });
  }

  private obterEstados(): void {
    this.estadosIBGEService.listar().subscribe({
      next: (res) => this.estados = res,
      error: (err) => alert('Ocorreu um erro ao carregar estados.')
    });
  }

  public voltar(): void {
    this.router.navigate(['/']);
  }

  public salvarFormulario(): void {
    if (this.formularioLugar.valid) {
      const novoLugar: Lugar = this.formularioLugar.value;

      this.lugarService.salvar(novoLugar).subscribe({
        next: (res) => {
          alert('Lugar cadastrado com sucesso!');
          this.voltar();
        },
        error: (err) => {
          alert('Ocorreu um erro ao salvar. Verifique se o json-server está rodando.');
        }
      })
    }
    else {
       this.formularioLugar.markAllAsTouched();
    }
  }
}
