import { TestBed } from '@angular/core/testing';

import { CollectinsService } from './collectins.service';

describe('CollectinsService', () => {
  let service: CollectinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
