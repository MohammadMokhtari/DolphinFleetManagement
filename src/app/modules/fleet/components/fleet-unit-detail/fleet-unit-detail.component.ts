import { Unit } from './../../models/unit.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FleetSidenavService } from '../../services/fleet-sidenav.service';

@Component({
  selector: 'app-fleet-unit-detail',
  templateUrl: './fleet-unit-detail.component.html',
  styleUrls: ['./fleet-unit-detail.component.scss'],
})
export class FleetUnitDetailComponent implements OnInit {
  constructor(
    private fleetSidenavService: FleetSidenavService,
    private route: ActivatedRoute
  ) {}

  public unit: Unit;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.unit = data['unit'];
    });
  }

  closeDrawer() {
    this.fleetSidenavService.close();
  }
}
