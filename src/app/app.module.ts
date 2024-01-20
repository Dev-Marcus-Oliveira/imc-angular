import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DadosTabelaComponent } from './Tabela-imc/dados-tabela/dados-tabela.component';
import { TabelaImcModule } from './Tabela-imc/tabela-imc.module';
import { CalculadoraImcModule } from './calculadora-imc/calculadora-imc.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabelaImcModule,
    CalculadoraImcModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
