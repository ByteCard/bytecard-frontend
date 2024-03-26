import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasMaiorValorComponent } from './compras-maior-valor.component';

describe('ComprasMaiorValorComponent', () => {
  let component: ComprasMaiorValorComponent;
  let fixture: ComponentFixture<ComprasMaiorValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasMaiorValorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasMaiorValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
