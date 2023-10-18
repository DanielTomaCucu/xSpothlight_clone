import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectedComponent } from './collected.component';


const routes: Routes = [{ path: '', component: CollectedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectedRoutingModule {}
