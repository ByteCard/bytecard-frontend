import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesComponent } from './cartoes.component';

describe('CartoesComponent', () => {
  let component: CartoesComponent;
  let fixture: ComponentFixture<CartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
