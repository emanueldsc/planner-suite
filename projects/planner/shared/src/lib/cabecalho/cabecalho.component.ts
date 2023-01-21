import { Component, Input } from '@angular/core';

@Component({
  selector: 'planner-cabecalho[color]',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.components.sass']
})
export class CabecalhoComponent {

  @Input('color') color!: string

}
