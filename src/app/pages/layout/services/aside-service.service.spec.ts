import { TestBed } from '@angular/core/testing';

import { AsideServiceService } from './aside-service.service';

describe('AsideServiceService', () => {
  let service: AsideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
