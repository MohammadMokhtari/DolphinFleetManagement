import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FleetSidenavService } from './services/fleet-sidenav.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent implements OnInit, AfterViewInit {
  constructor(private fleetSidenavService: FleetSidenavService) {}

  @ViewChild('fleetSidenav') public fleetSidenav: MatSidenav;

  ngAfterViewInit(): void {
    this.fleetSidenavService.setSidenav(this.fleetSidenav);
  }

  ngOnInit(): void {}
}
