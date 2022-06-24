import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetComponent } from './fleet.component';
import { FleetRoutingModule } from './fleet-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule, SharedModule],
})
export class FleetModule {}
