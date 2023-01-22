import { NgModule } from '@angular/core';
import { ComprasComponent } from './compras.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ItensComponent } from './components/itens/itens.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/planner/shared/src/public-api';



@NgModule({
  declarations: [
    ComprasComponent,
    HistoricoComponent,
    ItensComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ComprasComponent
  ]
})
export class ComprasModule { }
