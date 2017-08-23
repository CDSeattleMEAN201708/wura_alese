import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { MarketService } from './market.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';
import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BrowseComponent,
    ListingComponent,
    SearchPipe,
    OrderByPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
