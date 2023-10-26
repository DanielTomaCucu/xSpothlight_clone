import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftDetailsRoutingModule } from './nft-details-routing.module';
import { NftDetailsComponent } from './nft-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [NftDetailsComponent],
  imports: [
    CommonModule,
    NftDetailsRoutingModule,
    MatDialogModule,
    MatTabsModule,
  ],
})
export class NftDetailsModule {}
