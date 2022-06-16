import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './layout/components/home/home.component';

const pageRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'planning',
        loadChildren: () =>
          import('../modules/planning/planning.module').then(
            (m) => m.PlanningModule
          ),
      },
      {
        path: 'units',
        loadChildren: () =>
          import('../modules/units/units.module').then((m) => m.UnitsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
