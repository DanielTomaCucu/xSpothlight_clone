import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftsRoutingModule } from './nfts-routing.module';
import { NftsComponent } from './nfts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NftsComponent],
  imports: [CommonModule, NftsRoutingModule, SharedModule],
})
export class NftsModule {}
