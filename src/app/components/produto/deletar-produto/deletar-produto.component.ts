import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.scss']
})
export class DeletarProdutoComponent implements OnInit {


  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }


  excluir () {
    let id = this.route.snapshot.paramMap.get('id')

    console.log(`Excluido: ${id}`)
    if (id) {
      this.produtoService.delete(id).subscribe(
        (res) => {
          console.log('deletado')
          this.router.navigate(['/produtos'])
        }
      )
    }
  }


  cancelar() {
    console.log('cancelar e voltar')
    this.router.navigate(['/produtos'])
  }

  }




