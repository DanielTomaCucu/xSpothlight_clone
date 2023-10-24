import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NftDetailsComponent } from './nft-details.component';


const routes: Routes = [{ path: '', component: NftDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NftDetailsRoutingModule {}
