import { TestBed } from '@angular/core/testing';

import { CreatedService } from './created.service';

describe('CreatedService', () => {
  let service: CreatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
