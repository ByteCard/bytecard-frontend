import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCategoriaComponent } from './relatorio-categoria.component';

describe('RelatorioCategoriaComponent', () => {
  let component: RelatorioCategoriaComponent;
  let fixture: ComponentFixture<RelatorioCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
