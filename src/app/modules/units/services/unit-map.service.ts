import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitMapService {
  constructor(private http: HttpClient) {}

  getLocation(updateSource: any = null, mapbox: mapboxgl.Map) {
    return this.http.get('https://api.wheretheiss.at/v1/satellites/25544').pipe(
      map((data: any) => {
        const { latitude, longitude } = data;
        mapbox.flyTo({
          center: [longitude, latitude],
          speed: 0.5,
        });
        // Return the location of the ISS as GeoJSON.
        return {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [longitude, latitude],
              },
            },
          ],
        };
      }),
      catchError((error) => {
        if (updateSource) clearInterval(updateSource);
        throw new Error(error);
      })
    );
  }

  get geojson() {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            message: 'Foo',
            iconSize: [45, 45],
          },
          geometry: {
            type: 'Point',
            coordinates: [51.4467248, 32.4850885],
          },
        },
        {
          type: 'Feature',
          properties: {
            message: 'Bar',
            iconSize: [40, 40],
          },
          geometry: {
            type: 'Point',
            coordinates: [51.0207632, 32.8216997],
          },
        },
        {
          type: 'Feature',
          properties: {
            message: 'Baz',
            iconSize: [40, 40],
          },
          geometry: {
            type: 'Point',
            coordinates: [51.1380746, 32.4129932],
          },
        },
        {
          type: 'Feature',
          properties: {
            message: 'Baz',
            iconSize: [40, 40],
          },
          geometry: {
            type: 'Point',
            coordinates: [51.6409103, 32.6715432],
          },
        },
        {
          type: 'Feature',
          properties: {
            message: 'Baz',
            iconSize: [40, 40],
          },
          geometry: {
            type: 'Point',
            coordinates: [51.4941513, 32.3539765],
          },
        },
        {
          type: 'Feature',
          properties: {
            message: 'Baz',
            iconSize: [40, 40],
          },
          geometry: {
            type: 'Point',
            coordinates: [51.5827436, 32.6070749],
          },
        },
      ],
    };
  }
}
