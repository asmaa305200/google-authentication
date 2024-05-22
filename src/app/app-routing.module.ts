import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BrowseComponent } from './components/browse/browse.component';

const routes: Routes = [
  { path: "", component : LoginComponent , title :"login"},
  { path: "browse", component : BrowseComponent , title :"browse"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
