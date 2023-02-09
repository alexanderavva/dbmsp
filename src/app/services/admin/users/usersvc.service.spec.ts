import { TestBed } from '@angular/core/testing';

import { UsersvcService } from './usersvc.service';

describe('UsersvcService', () => {
  let service: UsersvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
