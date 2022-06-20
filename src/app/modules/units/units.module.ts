import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { UnitsRoutingModule } from './units-routing.module';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { UnitListItemComponent } from './components/unit-list/unit-list-item/unit-list-item.component';
import { UnitMapComponent } from './components/unit-map/unit-map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UnitsComponent,
    UnitListComponent,
    UnitListItemComponent,
    UnitMapComponent,
  ],
  imports: [CommonModule, SharedModule, UnitsRoutingModule],
})
export class UnitsModule {}
