
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout.route';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MainLayoutComponent } from '../main-layout.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class MainLayoutModule { }
