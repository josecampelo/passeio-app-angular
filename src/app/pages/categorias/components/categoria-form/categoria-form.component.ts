import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categoria-form',
  standalone: false,
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.scss'
})
export class CategoriaFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private categoriaService = inject(CategoriaService);
  private router = inject(Router);

  public formularioCategoria!: FormGroup;

  public ngOnInit(): void {
      this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formularioCategoria = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  public voltar(): void {
    this.router.navigate(['/']);
  }

  public salvarFormulario(): void {
    if (this.formularioCategoria.valid) {
      const novaCategoria: Categoria = this.formularioCategoria.value;

      this.categoriaService.salvar(novaCategoria).subscribe({
        next: (res) => {
          alert('Categoria cadastra com sucesso!');
          this.voltar();
        },
        error: (err) => {
          console.error('Erro ao salvar categoria:', err);
          alert('Ocorreu um erro ao salvar. Verifique se o json-server está rodando.');
        }
      })
    } else {
      this.formularioCategoria.markAllAsTouched();
    }
  }
}
