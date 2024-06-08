import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  redirectTo: "home-page",
  pathMatch: "full"
},
{
  path: "home-page",
  loadChildren: () => import('./create-player/create-player.module').then(m => m.CreatePlayerModule)
}, {
  path: "manage-player",
  loadChildren: () => import('./manage-player/manage-player.module').then(m => m.ManagePlayerModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
