import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';

import { BikeService } from './bike.service';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BrowseComponent,
    ListingComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
