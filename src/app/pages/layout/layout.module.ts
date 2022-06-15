import { PageRoutingModule } from './../page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SidenavService } from './services/aside-service.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AsideComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, PageRoutingModule],
  providers: [SidenavService],
})
export class LayoutModule {}
