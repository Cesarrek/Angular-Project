import { IProduto } from './../../../interfaces/produtoInterface';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.scss']
})
export class AtualizarProdutoComponent implements OnInit {

  public produto!: IProduto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {

    //Recuperando parametro da Rota
    const idRota = this.route.snapshot.paramMap.get('id')

    //Requisição Put
    this.produtoService.readById(idRota!).subscribe(
      (produto) => {
        this.produto = produto;
      }
    )
  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      console.log('Atualizado com sucesso')
      this.router.navigate(["/produtos"])
    })
  }

  cancelar(): void {
    this.router.navigate(["/produtos"])
  }
}

