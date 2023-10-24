import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftDetailsRoutingModule } from './nft-details-routing.module';
import { NftDetailsComponent } from './nft-details.component';



@NgModule({
  declarations: [NftDetailsComponent],
  imports: [
    CommonModule,
    NftDetailsRoutingModule
  ]
})
export class NftDetailsModule { }
