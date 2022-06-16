import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning.component';
import { PlanningRouutingModule } from './planning-routing.module';

@NgModule({
  declarations: [PlanningComponent],
  imports: [CommonModule, PlanningRouutingModule],
})
export class PlanningModule {}
