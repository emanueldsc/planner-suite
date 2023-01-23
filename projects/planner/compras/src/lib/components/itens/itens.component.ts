import { Component, Input } from '@angular/core';
import { Item } from './Item.model';

@Component({
  selector: 'planner-compras-itens[items]',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.sass']
})
export class ItensComponent {

  @Input('items') items: Item[] = []

}
