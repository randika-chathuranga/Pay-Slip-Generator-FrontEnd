import { TestBed } from '@angular/core/testing';

import { HtppinterceptorService } from './htppinterceptor.service';

describe('HtppinterceptorService', () => {
  let service: HtppinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtppinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
