import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { MarketComponent } from './market/market.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'browse', component: MarketComponent},
  {path: 'listing', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
