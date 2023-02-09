import { TestBed } from '@angular/core/testing';

import { ReportEmailCreEditService } from './report-email-cre-edit.service';

describe('ReportEmailCreEditService', () => {
  let service: ReportEmailCreEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportEmailCreEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
