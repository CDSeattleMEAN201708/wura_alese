import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'listing', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
