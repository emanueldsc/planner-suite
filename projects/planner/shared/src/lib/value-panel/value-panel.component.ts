import { Component, Input } from '@angular/core';

@Component({
  selector: 'planner-value-panel[title][value]',
  templateUrl: './value-panel.component.html',
  styleUrls: ['./value-panel.component.sass']
})
export class ValuePanelComponent {

  @Input('title') title: string = 'title'
  @Input('value') value: string = 'R$0,00'

}
