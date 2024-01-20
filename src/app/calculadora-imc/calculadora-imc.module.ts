import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraIMCComponent } from './calculadora-imc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculadoraIMCComponent],
  exports: [CalculadoraIMCComponent],
  imports: [CommonModule, FormsModule],
})
export class CalculadoraImcModule {}
