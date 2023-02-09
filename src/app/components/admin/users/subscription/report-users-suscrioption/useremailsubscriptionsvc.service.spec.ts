import { TestBed } from '@angular/core/testing';

import { UseremailsubscriptionsvcService } from './useremailsubscriptionsvc.service';

describe('UseremailsubscriptionsvcService', () => {
  let service: UseremailsubscriptionsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseremailsubscriptionsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
