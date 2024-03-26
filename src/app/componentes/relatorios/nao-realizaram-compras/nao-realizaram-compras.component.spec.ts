import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoRealizaramComprasComponent } from './nao-realizaram-compras.component';

describe('NaoRealizaramComprasComponent', () => {
  let component: NaoRealizaramComprasComponent;
  let fixture: ComponentFixture<NaoRealizaramComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoRealizaramComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoRealizaramComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
