import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectedRoutingModule } from './collected-routing.module';
import { RouterModule } from '@angular/router';
import { CollectedComponent } from './collected.component';
import { UserComponent } from '../user.component';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [CollectedComponent],
  imports: [CommonModule, CollectedRoutingModule, RouterModule, SharedModule],
  exports: [CollectedComponent],
})
export class CollectedModule {}
