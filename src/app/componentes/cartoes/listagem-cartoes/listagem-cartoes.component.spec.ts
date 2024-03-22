import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCartoesComponent } from './listagem-cartoes.component';

describe('ListagemCartoesComponent', () => {
  let component: ListagemCartoesComponent;
  let fixture: ComponentFixture<ListagemCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCartoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
