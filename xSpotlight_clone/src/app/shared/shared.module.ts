import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './trimText.pipe';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from './capitalize.pipe';
import { TruncatePipe } from './truncate.pipe';
import { TimestampToDatePipe } from './timestamp.pipe';
import { SkeletonLoaderNftDetailsComponent } from './skeleton-loader-nft-details/skeleton-loader-nft-details.component';
import { FileExtensionPipe } from './fileExternsion.pipe';

@NgModule({
  declarations: [
    TrimTextPipe,
    SkeletonLoaderComponent,
    NavbarMobileComponent,
    CapitalizePipe,
    TruncatePipe,
    TimestampToDatePipe,
    SkeletonLoaderNftDetailsComponent,
    SkeletonLoaderNftDetailsComponent,
    FileExtensionPipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TrimTextPipe,
    SkeletonLoaderComponent,
    NavbarMobileComponent,
    CapitalizePipe,
    TruncatePipe,
    TimestampToDatePipe,
    SkeletonLoaderNftDetailsComponent,FileExtensionPipe
  ],
})
export class SharedModule {}
