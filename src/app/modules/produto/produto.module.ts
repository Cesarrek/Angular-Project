import { ObterProdutoComponent } from './../../components/produto/obter-produto/obter-produto.component';
import { CriarProdutoComponent } from 'src/app/components/produto/criar-produto/criar-produto.component';
import { ProdutoComponent } from './../../components/produto/produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { FormsModule } from '@angular/forms';
import { AtualizarProdutoComponent } from 'src/app/components/produto/atualizar-produto/atualizar-produto.component';
import { DeletarProdutoComponent } from 'src/app/components/produto/deletar-produto/deletar-produto.component';


@NgModule({
  declarations: [
    ProdutoComponent,
    CriarProdutoComponent,
    ObterProdutoComponent,
    AtualizarProdutoComponent,
    DeletarProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
