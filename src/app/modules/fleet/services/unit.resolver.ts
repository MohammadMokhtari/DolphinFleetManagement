import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Unit } from './../models/unit.model';
import { UnitService } from './unit.service';

@Injectable()
export class UnitReolver implements Resolve<Unit> {
  constructor(private unitService: UnitService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Unit | Observable<Unit> | Promise<Unit> {
    return this.unitService.getUnit(+route.paramMap.get('id')!)!;
  }
}
