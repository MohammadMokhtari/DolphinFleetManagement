import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { UnitsRoutingModule } from './units-routing.module';

@NgModule({
  declarations: [UnitsComponent],
  imports: [CommonModule, UnitsRoutingModule],
})
export class UnitsModule {}
