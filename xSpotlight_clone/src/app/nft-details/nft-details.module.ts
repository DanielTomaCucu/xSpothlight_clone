import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftDetailsRoutingModule } from './nft-details-routing.module';
import { NftDetailsComponent } from './nft-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NftDetailsComponent],
  imports: [
    CommonModule,
    NftDetailsRoutingModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule
  ],
})
export class NftDetailsModule {}
