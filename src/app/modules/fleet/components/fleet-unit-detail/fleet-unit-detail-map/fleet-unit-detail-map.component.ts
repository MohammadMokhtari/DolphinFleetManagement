import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fleet-unit-detail-map',
  templateUrl: './fleet-unit-detail-map.component.html',
  styleUrls: ['./fleet-unit-detail-map.component.scss'],
})
export class FleetUnitDetailMapComponent implements OnInit {
  constructor() {}

  private unitDetailMap: mapboxgl.Map;

  ngOnInit(): void {
    setTimeout(() => {
      (Mapboxgl.accessToken as any) = environment.mapbox.accessToken;
      this.unitDetailMap = new Mapboxgl.Map({
        container: 'unit-detial-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [51.4467248, 32.4850885],
        zoom: 8.5,
      });
      this.unitDetailMap.on('load', () => {
        this.unitDetailMap.resize();
      });
    }, 200);
  }
}
