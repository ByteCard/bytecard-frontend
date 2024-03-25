import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaComponent } from './fatura.component';

describe('FaturaComponent', () => {
  let component: FaturaComponent;
  let fixture: ComponentFixture<FaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
