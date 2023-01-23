import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Item } from './components/itens/Item.model';

@Component({
  selector: 'planner-compras',
  templateUrl: 'compras.component.html',
  styleUrls: ['compras.component.sass'],
  providers: [CurrencyPipe]
})
export class ComprasComponent implements OnInit {

  items: Item[] = []
  _orcamento: number = 0

  ngOnInit(): void {
    for (let i = 0; i < 123; i++) {
      this.items.push(
        new Item(`Item ${i}`, i, 3)
      )
    }
    this._orcamento = 30000
  }


  get orcamento(): string {
    return this.transform(this._orcamento)
  }

  get subtotal(): string {
    const subtotal = this.items.reduce((prev, current) => prev + current.total, 0)
    return this.transform(subtotal)
  }

  get total(): string {
    const total = this._orcamento - this.items.reduce((prev, current) => prev + current.total, 0)
    return this.transform(total)
  }

  transform = (value: number): string => this.currencyPipe.transform(value, 'BRL', true, '1.0-2') as string

  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

}
