export interface IGeometry {
  type: string;
  coordinates: [number, number];
}

export interface IGeojson {
  type: string;
  geometry: IGeometry;
  properties?: any;
  $key?: any;
}

export class GeoJson implements IGeojson {
  type: string;
  geometry: IGeometry;
  constructor(cordinates: [number, number], public properties?: any) {
    this.geometry = {
      type: 'Point',
      coordinates: cordinates,
    };
  }
}

export class FeatureCollection {
  type = 'featureCollection';
  constructor(public features: Array<GeoJson>) {}
}
