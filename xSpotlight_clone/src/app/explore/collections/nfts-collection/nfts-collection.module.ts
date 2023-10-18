import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftsCollectionRoutingModule } from './nfts-collection-routing.module';
import { NftsCollectionComponent } from './nfts-collection.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NftsCollectionComponent
  ],
  imports: [
    CommonModule,
    NftsCollectionRoutingModule, SharedModule
  ]
})
export class NftsCollectionModule { }
