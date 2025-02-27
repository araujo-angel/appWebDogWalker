import { TestBed } from '@angular/core/testing';

import { PasseioFirestoreService } from './passeio-firestore.service';

describe('PasseioFirestoreService', () => {
  let service: PasseioFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasseioFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
