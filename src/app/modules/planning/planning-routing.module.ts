import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlanningComponent } from './planning.component';

const planningRouting: Routes = [
  {
    path: '',
    component: PlanningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(planningRouting)],
})
export class PlanningRouutingModule {}
