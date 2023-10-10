import { TestBed } from '@angular/core/testing';

import { CollectionsHomeService } from './collections-home.service';

describe('CollectionsHomeService', () => {
  let service: CollectionsHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
