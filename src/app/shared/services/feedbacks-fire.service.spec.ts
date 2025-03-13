import { TestBed } from '@angular/core/testing';

import { FeedbacksFireService} from './feedbacks-fire.service';

describe('FeedbacksFireServiceService', () => {
  let service: FeedbacksFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbacksFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
