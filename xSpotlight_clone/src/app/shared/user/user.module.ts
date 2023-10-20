import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { CollectedModule } from './collected/collected.module';
import { SharedModule } from '../shared.module';
import { UserComponent } from './user.component';
import { CreatedModule } from './created/created.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    CollectedModule,
    CreatedModule,
    SharedModule
  ],
  exports:[UserComponent]
})
export class UserModule {}
