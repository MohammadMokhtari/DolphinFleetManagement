import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetUnitsTableComponent } from './fleet-units-table.component';

describe('FleetUnitsTableComponent', () => {
  let component: FleetUnitsTableComponent;
  let fixture: ComponentFixture<FleetUnitsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetUnitsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetUnitsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
