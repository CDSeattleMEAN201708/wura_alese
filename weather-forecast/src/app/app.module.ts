import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TaskService } from './task.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurkankComponent } from './burkank/burkank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DCComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    BurkankComponent,
    DallasComponent,
    DCComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
