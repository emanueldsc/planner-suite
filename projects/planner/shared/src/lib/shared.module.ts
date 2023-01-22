import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ValuePanelComponent } from './value-panel/value-panel.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    ValuePanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabecalhoComponent,
    ValuePanelComponent
  ]
})
export class SharedModule { }
