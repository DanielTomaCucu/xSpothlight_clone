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
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { MarketplacesComponent } from './marketplaces/marketplaces.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExploreModule } from './explore/explore.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    TrendingComponent,
    CollectionsHomeComponent,
    MarketplacesComponent,
    TweetsComponent,
    NewsLetterComponent,
    FooterComponent,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    NgxTwitterWidgetsModule,
    ExploreModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
