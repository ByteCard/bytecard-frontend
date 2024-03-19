import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirClienteComponent } from './excluir-cliente.component';

describe('ExcluirClienteComponent', () => {
  let component: ExcluirClienteComponent;
  let fixture: ComponentFixture<ExcluirClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
