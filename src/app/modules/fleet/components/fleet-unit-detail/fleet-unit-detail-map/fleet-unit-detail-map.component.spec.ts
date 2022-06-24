import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetUnitDetailMapComponent } from './fleet-unit-detail-map.component';

describe('FleetUnitDetailMapComponent', () => {
  let component: FleetUnitDetailMapComponent;
  let fixture: ComponentFixture<FleetUnitDetailMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetUnitDetailMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetUnitDetailMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
