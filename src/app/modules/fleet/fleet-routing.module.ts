import { FleetComponent } from './fleet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const fleetRoutes: Routes = [
  {
    path: '',
    component: FleetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(fleetRoutes)],
  exports: [RouterModule],
})
export class FleetRoutingModule {}
