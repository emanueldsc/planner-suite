import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'projects/planner/shared/src/public-api';
import { HistoricoComponent } from './components/historico/historico.component';
import { ItensComponent } from './components/itens/itens.component';
import { PainelComponent } from './components/painel/painel.component';

import { ComprasComponent } from './compras.component';

describe('ComprasComponent', () => {
  let component: ComprasComponent;
  let fixture: ComponentFixture<ComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ComprasComponent, 
        HistoricoComponent,
        PainelComponent,
        ItensComponent
      ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve verificar se o componente de cabecalho está sendo renderizado.', () => {
    const cabecalhoComponent = fixture.debugElement.query(By.css('planner-cabecalho')).nativeElement
    expect(cabecalhoComponent).toBeTruthy()
  })

  it('Deve verificar se o componente de histórico está sendo renderizado.', () => {
    const historicoComponent = fixture.debugElement.query(By.css('planner-compras-historico')).nativeElement
    expect(historicoComponent).toBeTruthy()
  })

  it('Deve verificar se os componentes de paineis estão sendo renderizados.', () => {
    const listPaineisComponents = fixture.debugElement.queryAll(By.css('planner-compras-historico'))
    listPaineisComponents.forEach(panel => expect(panel).toBeTruthy())
  })

  it('Deve verificar se o component de itens está sendo renderizado.', () => {
    const itensComponent = fixture.debugElement.query(By.css('planner-compras-itens')) .nativeElement
    expect(itensComponent).toBeTruthy()
  })

});
