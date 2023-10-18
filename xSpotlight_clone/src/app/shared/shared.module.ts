import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './trimText.pipe';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { CollectedModule } from './user/collected/collected.module';

@NgModule({
  declarations: [TrimTextPipe, SkeletonLoaderComponent, NavbarMobileComponent],
  imports: [CommonModule, RouterModule],
  exports: [TrimTextPipe, SkeletonLoaderComponent, NavbarMobileComponent],
})
export class SharedModule {}
