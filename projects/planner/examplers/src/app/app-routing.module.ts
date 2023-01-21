import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from 'projects/planner/compras/src/public-api';

const routes: Routes = [
  { path: '', redirectTo: 'compras', pathMatch: 'full'},
  { path: 'compras', component: ComprasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
