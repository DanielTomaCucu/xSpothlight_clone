import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedRoutingModule } from './created-routing.module';
import { CreatedComponent } from './created.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [CreatedComponent],
  imports: [CommonModule, CreatedRoutingModule, RouterModule, SharedModule],
})
export class CreatedModule {}
