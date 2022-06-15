import { PageRoutingModule } from './../page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AsideComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, PageRoutingModule],
})
export class LayoutModule {}
