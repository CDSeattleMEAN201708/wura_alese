import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {path: 'battle', component: BattleComponent},
  {path: 'rankings', component: RankingComponent},
  {path: '', redirectTo: 'battle', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
