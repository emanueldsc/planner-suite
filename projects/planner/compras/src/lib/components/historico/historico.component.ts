import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planner-compras-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.sass']
})
export class HistoricoComponent implements OnInit {

  items: any[] = []

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      this.items.push({
        data: `${i}/01/2023`,
        total: `${i * 100}`
      })
    }
  }

}
