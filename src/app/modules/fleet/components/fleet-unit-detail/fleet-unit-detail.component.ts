import { Component, OnInit } from '@angular/core';
import { FleetSidenavService } from '../../services/fleet-sidenav.service';

@Component({
  selector: 'app-fleet-unit-detail',
  templateUrl: './fleet-unit-detail.component.html',
  styleUrls: ['./fleet-unit-detail.component.scss'],
})
export class FleetUnitDetailComponent implements OnInit {
  constructor(private fleetSidenavService: FleetSidenavService) {}

  ngOnInit(): void {}

  closeDrawer() {
    this.fleetSidenavService.close();
  }
}
