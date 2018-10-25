import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaComponent } from './meta/meta.component';

const routes: Routes = [
  { path: '', component: MetaComponent },
  { path: ':key', component: MetaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
