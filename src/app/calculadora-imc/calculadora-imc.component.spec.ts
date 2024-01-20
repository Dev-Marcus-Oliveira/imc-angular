import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraIMCComponent } from './calculadora-imc.component';

describe('CalculadoraIMCComponent', () => {
  let component: CalculadoraIMCComponent;
  let fixture: ComponentFixture<CalculadoraIMCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraIMCComponent]
    });
    fixture = TestBed.createComponent(CalculadoraIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
