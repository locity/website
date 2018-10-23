import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HexagonComponent } from './hexagon/hexagon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':key', component: HexagonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
