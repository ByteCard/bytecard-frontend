import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosGastosCategoriaComponent } from './relatorios-gastos-categoria.component';

describe('RelatoriosGastosCategoriaComponent', () => {
  let component: RelatoriosGastosCategoriaComponent;
  let fixture: ComponentFixture<RelatoriosGastosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosGastosCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosGastosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
