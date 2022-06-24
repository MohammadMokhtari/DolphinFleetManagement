import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetUnitDetailComponent } from './fleet-unit-detail.component';

describe('FleetUnitDetailComponent', () => {
  let component: FleetUnitDetailComponent;
  let fixture: ComponentFixture<FleetUnitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetUnitDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
