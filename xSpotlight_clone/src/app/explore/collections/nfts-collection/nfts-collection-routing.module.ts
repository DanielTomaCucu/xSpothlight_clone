import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftsCollectionComponent } from './nfts-collection.component';

const routes: Routes = [{ path: '', component: NftsCollectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NftsCollectionRoutingModule {}
