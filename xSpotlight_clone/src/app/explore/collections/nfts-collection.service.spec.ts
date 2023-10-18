import { TestBed } from '@angular/core/testing';

import { NftsCollectionService } from './nfts-collection.service';

describe('NftsCollectionService', () => {
  let service: NftsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
