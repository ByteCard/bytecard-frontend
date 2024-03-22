import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFaturaComponent } from './ver-fatura.component';

describe('VerFaturaComponent', () => {
  let component: VerFaturaComponent;
  let fixture: ComponentFixture<VerFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
