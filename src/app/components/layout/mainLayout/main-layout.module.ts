import { MainLayoutComponent } from './main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent
  ]
})
export class MainLayoutModule { }
