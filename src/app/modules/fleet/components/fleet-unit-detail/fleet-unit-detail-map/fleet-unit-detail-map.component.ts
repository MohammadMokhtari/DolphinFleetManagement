import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Unit } from '../../../models/unit.model';
import * as Mapboxgl from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fleet-unit-detail-map',
  templateUrl: './fleet-unit-detail-map.component.html',
  styleUrls: ['./fleet-unit-detail-map.component.scss'],
})
export class FleetUnitDetailMapComponent implements OnInit, OnChanges {
  constructor() {}

  private unitDetailMap: mapboxgl.Map;
  private style = 'mapbox://styles/mapbox/streets-v11';

  private _unit: Unit;

  @Input() public set unit(value: Unit) {
    this._unit = value;
  }

  public get unit() {
    return this._unit;
  }

  ngOnInit(): void {
    this.initializeMap();
  }
  ngOnChanges() {
    if (this.unitDetailMap) {
      this.flayTo();
    }
  }

  private initializeMap() {
    this.buildMap();
  }

  private buildMap() {
    setTimeout(() => {
      (Mapboxgl.accessToken as any) = environment.mapbox.accessToken;

      this.unitDetailMap = new Mapboxgl.Map({
        container: 'unit-detial-map',
        style: this.style,
        center: this._unit.geometry?.coordinates as Mapboxgl.LngLatLike,
        zoom: 12,
      });

      this.unitDetailMap.on('load', () => {
        this.unitDetailMap.resize();

        this.unitDetailMap.loadImage(this.unit.imageUrl, (error, image) => {
          if (error) throw error;
          this.unitDetailMap.addImage('unit', image!);
        });

        this.unitDetailMap.addSource('geojson', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: this.unit.geometry?.coordinates!,
                },
                properties: null,
              },
            ],
          },
        });

        this.unitDetailMap.addLayer({
          id: 'geojson',
          type: 'symbol',
          source: 'geojson',
          layout: {
            'icon-image': 'unit', // reference the image
            'icon-size': 1,
            'text-anchor': 'bottom',
            'text-field': this.unit.title,
            'text-offset': [0, 3.5],
          },
        });
        // const updateSource = setInterval(() => {
        //   this.unitmapService
        //     .getLocation(updateSource, this.unitMap)
        //     .subscribe((data) => {
        //       (this.unitMap.getSource('iss') as Mapboxgl.GeoJSONSource).setData(
        //         data as any
        //       );
        //     });
        // }, 2000);
      });
    }, 100);
  }

  private flayTo() {
    this.unitDetailMap.removeLayer('geojson');
    this.unitDetailMap.removeImage('unit');

    this.unitDetailMap.loadImage(this.unit.imageUrl, (error, image) => {
      if (error) throw error;
      this.unitDetailMap.addImage(`unit`, image!);
    });
    (this.unitDetailMap.getSource('geojson') as Mapboxgl.GeoJSONSource).setData(
      {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: this.unit.geometry?.coordinates!,
            },
            properties: null,
          },
        ],
      }
    );

    this.unitDetailMap.addLayer({
      id: 'geojson',
      type: 'symbol',
      source: 'geojson',
      layout: {
        'icon-image': 'unit', // reference the image
        'icon-size': 1,
        'text-anchor': 'bottom',
        'text-field': this.unit.title,
        'text-offset': [0, 3.5],
      },
    });

    this.unitDetailMap.flyTo({
      center: this.unit.geometry?.coordinates as Mapboxgl.LngLatLike,
    });
  }
}
