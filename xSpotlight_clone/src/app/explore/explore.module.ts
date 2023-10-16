import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';

import { RouterModule } from '@angular/router';
import { NftsComponent } from './nfts/nfts.component';
import { TrimTextPipe } from '../shared/trimText.pipe';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ExploreComponent, NftsComponent],
  imports: [CommonModule, ExploreRoutingModule, RouterModule, SharedModule],
})
export class ExploreModule {}
