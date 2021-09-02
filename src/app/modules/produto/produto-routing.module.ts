import { AtualizarProdutoComponent } from './../../components/produto/atualizar-produto/atualizar-produto.component';
import { ProdutoComponent } from './../../components/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from 'src/app/components/produto/criar-produto/criar-produto.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutoComponent},
  {path: 'produtos/criar', component: CriarProdutoComponent},
  {
    path: 'produtos/update/:id',
    component: AtualizarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
