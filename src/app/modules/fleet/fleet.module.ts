import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetComponent } from './fleet.component';
import { FleetRoutingModule } from './fleet-routing.module';

@NgModule({
  declarations: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule],
})
export class FleetModule {}
