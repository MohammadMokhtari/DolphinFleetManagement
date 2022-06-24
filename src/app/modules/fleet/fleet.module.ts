import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetComponent } from './fleet.component';
import { FleetRoutingModule } from './fleet-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FleetUnitsTableComponent } from './components/fleet-units-table/fleet-units-table.component';
import { FleetUnitDetailComponent } from './components/fleet-unit-detail/fleet-unit-detail.component';
import { FleetUnitDetailMapComponent } from './components/fleet-unit-detail/fleet-unit-detail-map/fleet-unit-detail-map.component';

@NgModule({
  declarations: [FleetComponent, FleetUnitsTableComponent, FleetUnitDetailComponent, FleetUnitDetailMapComponent],
  imports: [CommonModule, FleetRoutingModule, SharedModule],
})
export class FleetModule {}
