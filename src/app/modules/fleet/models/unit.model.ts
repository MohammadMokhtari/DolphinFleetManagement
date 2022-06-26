import { IGeometry } from './map';

export class Unit {
  constructor(
    public id: number,
    public imageUrl: string,
    public title: string,
    public type: string,
    public number: number,
    public label: string,
    public geometry?: IGeometry
  ) {}
}
