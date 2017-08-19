import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'log_out', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
