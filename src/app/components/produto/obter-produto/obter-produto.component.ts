import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produtoInterface';

@Component({
  selector: 'app-obter-produto',
  templateUrl: './obter-produto.component.html',
  styleUrls: ['./obter-produto.component.scss']
})
export class ObterProdutoComponent implements OnInit {

  public produtos: IProduto[] = []
  public colunas = ['id', 'nome', 'preço']


  constructor(
    private produtoService: ProdutoService
    ) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(
      produtos => {
        this.produtos = produtos
        console.log(produtos)
      }
    )

  }

}
