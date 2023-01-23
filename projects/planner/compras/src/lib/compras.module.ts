import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/planner/shared/src/public-api';
import { HistoricoComponent } from './components/historico/historico.component';
import { ItensComponent } from './components/itens/itens.component';
import { ComprasComponent } from './compras.component';



@NgModule({
  declarations: [
    ComprasComponent,
    HistoricoComponent,
    ItensComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    ComprasComponent
  ]
})
export class ComprasModule { }
