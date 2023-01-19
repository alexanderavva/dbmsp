import { TestBed } from '@angular/core/testing';

import { SPgSettingService } from './spg-setting.service';

describe('SPgSettingService', () => {
  let service: SPgSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPgSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
