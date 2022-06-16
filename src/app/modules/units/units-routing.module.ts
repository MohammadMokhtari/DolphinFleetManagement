import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UnitsComponent } from './units.component';

const unitsRoutes: Routes = [
  {
    path: '',
    component: UnitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(unitsRoutes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
