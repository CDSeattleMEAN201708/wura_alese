import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component'
import { Game1Component } from './game-1/game-1.component'
import { AddPlayerComponent } from './add-player/add-player.component'

const routes: Routes = [
  {path: 'players', component: PlayersComponent},
  {path: 'status/game1', component: Game1Component},
  {path: 'players/list', component: ListComponent},
  {path: 'players/addplayer', component: AddPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
