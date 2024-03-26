import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisComprasRealizadasComponent } from './mais-compras-realizadas.component';

describe('MaisComprasRealizadasComponent', () => {
  let component: MaisComprasRealizadasComponent;
  let fixture: ComponentFixture<MaisComprasRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisComprasRealizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisComprasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
