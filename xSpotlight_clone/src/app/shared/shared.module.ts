import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './trimText.pipe';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';



@NgModule({
  declarations: [TrimTextPipe, SkeletonLoaderComponent],
  imports: [
    CommonModule
  ],
  exports:[TrimTextPipe,SkeletonLoaderComponent]
})
export class SharedModule { }
