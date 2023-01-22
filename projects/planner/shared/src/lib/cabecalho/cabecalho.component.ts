import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'planner-cabecalho[color]',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.components.sass']
})
export class CabecalhoComponent implements OnInit {

  @Input('color') color: string = 'black'

  circleStyle = {
    'position': 'absolute',
    'right': '1rem',
    'top': '-2.5rem',
    'border': `solid 5px black`,
    'borderRadius': '50%',
    'height': '5rem',
    'width': '5rem'
  }

  ngOnInit(): void {
      this.circleStyle.border = `solid 5px ${this.color}`
  }

}
