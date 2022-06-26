import { Component, OnInit } from '@angular/core';

import { Unit } from '../../models/unit.model';
import { FleetSidenavService } from '../../services/fleet-sidenav.service';
import { UnitService } from '../../services/unit.service';

@Component({
  selector: 'app-fleet-units-table',
  templateUrl: './fleet-units-table.component.html',
  styleUrls: ['./fleet-units-table.component.scss'],
})
export class FleetUnitsTableComponent implements OnInit {
  public units: Unit[];

  constructor(
    private fleetSidenaveService: FleetSidenavService,
    private unitService: UnitService
  ) {}

  ngOnInit(): void {
    this.units = this.unitService.getUnits();
  }

  displayedColumns: string[] = ['symptom', 'title', 'type', 'number', 'label'];

  openDrawer() {
    this.fleetSidenaveService.open();
  }
}
