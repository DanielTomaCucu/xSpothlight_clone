import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedComponent } from './created.component';

const routes: Routes = [{ path: '', component: CreatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedRoutingModule {}
