import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetsComponent } from './tweets.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';



@NgModule({
  declarations: [TweetsComponent],
  exports: [TweetsComponent],
  imports: [NgxTwitterWidgetsModule, CommonModule],
})
export class TweetsModule {}
