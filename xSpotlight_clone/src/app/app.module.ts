import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { TrimTextPipe } from './shared/trimText.pipe';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { MarketplacesComponent } from './marketplaces/marketplaces.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    TrendingComponent,
    TrimTextPipe,
    CollectionsHomeComponent,
    MarketplacesComponent,
    TweetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    NgxTwitterWidgetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
