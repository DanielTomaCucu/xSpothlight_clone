import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { NftsModule } from './nfts/nfts.module';
import { CollectionsModule } from './collections/collections.module';
@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    RouterModule,
    SharedModule,
    NftsModule,
    CollectionsModule
  ],
})
export class ExploreModule {}
