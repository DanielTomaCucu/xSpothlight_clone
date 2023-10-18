import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsCollectionComponent } from './nfts-collection.component';

describe('NftsCollectionComponent', () => {
  let component: NftsCollectionComponent;
  let fixture: ComponentFixture<NftsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftsCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
