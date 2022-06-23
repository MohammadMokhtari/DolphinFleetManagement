import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { UnitMapService } from '../../services/unit-map.service';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-unit-map',
  templateUrl: './unit-map.component.html',
  styleUrls: ['./unit-map.component.scss'],
})
export class UnitMapComponent implements OnInit {
  constructor(private unitmapService: UnitMapService) {}

  private unitMap: Mapboxgl.Map;

  ngOnInit(): void {
    setTimeout(() => {
      (Mapboxgl.accessToken as any) = environment.mapbox.accessToken;
      this.unitMap = new Mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [51.4467248, 32.4850885],
        zoom: 8.5,
      });
      this.unitMap.addControl(new Mapboxgl.NavigationControl());

      this.unitMap.on('load', () => {
        let i = 1;
        for (const marker of this.unitmapService.geojson.features) {
          // Create a DOM element for each marker.
          const el = document.createElement('div');
          const width = marker.properties.iconSize[0];
          const height = marker.properties.iconSize[1];
          el.className = 'marker';
          el.style.backgroundImage = `url(../../../../../assets/uniticon/3.0x/ic_unit${i++}.png)`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = '100%';
          el.style.backgroundSize = 'contain';
          el.style.backgroundRepeat = 'no-repeat';

          el.addEventListener('click', () => {
            window.alert(marker.properties.message);
          });

          // Add markers to the map.
          new Mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates as any)
            .addTo(this.unitMap);
        }
      });
    }, 500);
  }
}
