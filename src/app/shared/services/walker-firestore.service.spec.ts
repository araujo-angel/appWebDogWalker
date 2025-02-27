import { TestBed } from '@angular/core/testing';

import { WalkerFirestoreService } from './walker-firestore.service';

describe('WalkerFirestoreService', () => {
  let service: WalkerFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkerFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
