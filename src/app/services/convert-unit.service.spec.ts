import { TestBed } from '@angular/core/testing';

import { ConvertUnitService } from './convert-unit.service';

describe('ConvertUnitService', () => {
  let service: ConvertUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
