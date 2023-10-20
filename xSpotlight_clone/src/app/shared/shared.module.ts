import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './trimText.pipe';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TrimTextPipe, SkeletonLoaderComponent, NavbarMobileComponent],
  imports: [CommonModule, RouterModule],
  exports: [TrimTextPipe, SkeletonLoaderComponent, NavbarMobileComponent],
})
export class SharedModule {}
