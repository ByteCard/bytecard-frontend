import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLimiteComponent } from './alterar-limite.component';

describe('AlterarLimiteComponent', () => {
  let component: AlterarLimiteComponent;
  let fixture: ComponentFixture<AlterarLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
