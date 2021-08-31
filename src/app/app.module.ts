import { ProdutoModule } from './modules/produto/produto.module';
import { MainLayoutModule } from './pages/mainLayout/main-layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CriarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
