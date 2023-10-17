import { NgModule } from '@angular/core';
import { CollectionsComponent } from './collections.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CollectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
