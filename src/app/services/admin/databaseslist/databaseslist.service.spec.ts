import { TestBed } from '@angular/core/testing';

import { DatabaseslistService } from './databaseslist.service';

describe('DatabaseslistService', () => {
  let service: DatabaseslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
