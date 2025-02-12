import { TestBed } from '@angular/core/testing';

import { PasseioRestService } from './passeio-rest.service';

describe('PasseioRestService', () => {
  let service: PasseioRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasseioRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
