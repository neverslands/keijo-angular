import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeijoComponent } from './components/keijo/keijo.component';

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "keijo", component: KeijoComponent },
  { path: "**", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
