import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { TweetsModule } from '../tweets/tweets.module';
import { NewsLetterModule } from '../news-letter/news-letter.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    TweetsModule,
    NewsLetterModule,
  ],
})
export class WelcomeModule {}
