import { Injectable } from '@angular/core';

import { Unit } from '../models/unit.model';

@Injectable()
export class UnitService {
  constructor() {}
  private units: Unit[] = [
    {
      id: 1,
      imageUrl: '../../../../assets/uniticon/ic_unit1.png',
      title: 'جایگزین پاتیل بر11 ',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.4467248, 32.4850885] },
    },
    {
      id: 2,
      imageUrl: '../../../../assets/uniticon/ic_unit2.png',
      title: 'پاتیل بر9',
      label: 'خودرو کوره',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.1522319, 33.4870438] },
    },
    {
      id: 3,
      imageUrl: '../../../../assets/uniticon/ic_unit3.png',
      title: 'جایگزین پاتیل بر11 ',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.5560124, 32.6047255] },
    },
    {
      id: 4,
      imageUrl: '../../../../assets/uniticon/ic_unit4.png',
      title: 'جایگزین پاتیل بر11 ',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.724069, 32.612023] },
    },
    {
      id: 5,
      imageUrl: '../../../../assets/uniticon/ic_unit5.png',
      title: 'جایگزین پاتیل بر11 ',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.64409, 32.661143] },
    },
    {
      id: 6,
      imageUrl: '../../../../assets/uniticon/ic_unit1.png',
      title: 'پاتیل بر80',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.134189, 32.410436] },
    },
    {
      id: 7,
      imageUrl: '../../../../assets/uniticon/ic_unit7.png',
      title: 'پاتیل بر10',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [52.46894, 29.60504] },
    },
    {
      id: 8,
      imageUrl: '../../../../assets/uniticon/ic_unit3.png',
      title: 'پاتیل بر28',
      label: '',
      number: +989124587951,
      type: 'دستگاه ایگل E200',
      geometry: { type: 'point', coordinates: [51.290072, 32.633328] },
    },
  ];

  getUnits(): Unit[] {
    return this.units.slice();
  }
  getUnit(unitId: number): Unit | null {
    return this.units.find((u) => u.id == unitId) ?? null;
  }
}
