import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FleetComponent } from './fleet.component';
import { FleetUnitDetailComponent } from './components/fleet-unit-detail/fleet-unit-detail.component';
import { UnitReolver } from './services/unit.resolver';

const fleetRoutes: Routes = [
  {
    path: '',
    component: FleetComponent,
    children: [
      {
        path: ':id',
        component: FleetUnitDetailComponent,
        resolve: {
          unit: UnitReolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(fleetRoutes)],
  exports: [RouterModule],
})
export class FleetRoutingModule {}
