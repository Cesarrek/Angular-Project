import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {

  public produtoTest = {
    nome: '',
    preco: null
  }


  constructor(
    private router: Router,
    private produtoService: ProdutoService
    ) { }


  // Método que vai fornecer o objeto para requisição Http POST
  public criarProduto(){
    this.produtoService.create(this.produtoTest).subscribe(
      () => {
        console.log('Sucesso');
        this.router.navigate(['/produtos'])
      }
    )
  }

  // Método do botão Cancelar
  public cancelar() {
    console.log('Cancelar')
    this.router.navigate(['/produtos'])
  }

  ngOnInit(): void {
  }
}
