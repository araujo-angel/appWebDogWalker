import { TestBed } from '@angular/core/testing';

import { WalkerService } from './walker.service';

describe('WalkerService', () => {
  let service: WalkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
