import { ProdutoComponent } from './components/produto/produto.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/mainLayout/main-layout.component';



const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  {
    path: '', component: MainLayoutComponent,
    loadChildren: () => import('./modules/produto/produto.module')
                  .then( m => m.ProdutoModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
