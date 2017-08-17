import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';

import { GitService } from './git.service'

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
