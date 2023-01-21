import { TestBed } from '@angular/core/testing';

import { YouThubService } from './you-thub.service';

describe('YouThubService', () => {
  let service: YouThubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouThubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
