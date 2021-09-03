import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router) { }

  public navCriarProduto(){
    this.router.navigate(['/produtos/criar'])
  }

  ngOnInit(): void {
  }

}

