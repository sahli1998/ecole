import { TestBed } from '@angular/core/testing';

import { EtdientServiceService } from './etdient-service.service';

describe('EtdientServiceService', () => {
  let service: EtdientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtdientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
