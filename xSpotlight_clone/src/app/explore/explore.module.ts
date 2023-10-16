import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule, RouterModule],
})
export class ExploreModule {}
