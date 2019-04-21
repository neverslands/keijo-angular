import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "player", component: PlayerComponent },
  { path: "addplayer", component: AddplayerComponent },
  { path: "**", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
