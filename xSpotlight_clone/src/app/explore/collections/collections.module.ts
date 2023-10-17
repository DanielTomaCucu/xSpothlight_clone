import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    MatIconModule,
  ],
})
export class CollectionsModule {}
