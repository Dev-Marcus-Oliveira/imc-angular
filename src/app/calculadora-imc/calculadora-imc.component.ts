import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css'],
})
export class CalculadoraIMCComponent implements AfterViewInit {
  peso: number | null = 0;
  altura: number | null = 0;
  imc: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.calcularImc();
  }

  calcularImc(): void {
    const altura = parseFloat(this.altura?.toString() || '0') || 0;
    const peso = parseFloat(this.peso?.toString() || '0') || 0;

    if (altura > 0) {
      this.imc = peso / Math.pow(altura / 100, 2);
      this.imc = parseFloat(this.imc.toFixed(1));
    } else {
      this.imc = 0;
    }
  }

  limparPeso(): void {
    this.peso = null;
    this.calcularImc();
  }

  limparAltura(): void {
    this.altura = null;
    this.calcularImc();
  }
}
