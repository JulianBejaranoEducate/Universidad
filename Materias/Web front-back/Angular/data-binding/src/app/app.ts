import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ 
    CommonModule,
    FormsModule,
    Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Formas de Enlazar Datos';
  private data:string = "Esto es una interpolación";
  public edad:number = 18;
  protected nombre:string = "Holtman";

  // Metodó de acceso
  public getData(): string { //retorna un string el metodo publico
    return this.data;
  }

  // Metodó de orden "manda los archivos"
  public getEvento(): void { // Un metodó que no retorna nada
    alert("Soy Click");
  }

  // Metodó de transformación
  public transformar(texto: string): string {
    return texto.toUpperCase();
  }

  public calcular(): number {
    return this.edad * 12;
  }

  // Metodó de validación
  public mayorEdad(): boolean {
    return this.edad >= 18;
  }

  public nombreEsValido(): boolean {
    return this.nombre.length > 2;
  }

  // Metodó de manipulación
  public aumentarEdad(): void {
    this.edad++;
  }

  public limpiarNombre(): void {
    this.nombre = '';
  }

  public resetearDatos(): void {
    this.edad = 0;
    this.nombre = '';
  }
}
