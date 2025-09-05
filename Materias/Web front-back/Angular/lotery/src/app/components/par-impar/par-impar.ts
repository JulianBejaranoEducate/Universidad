import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-par-impar',
  imports: [],
  templateUrl: './par-impar.html',
  styleUrl: './par-impar.css'
})
export class ParImpar {

  mensaje : string;
  // Recibir un valor
  @Input() valor : number;
  // Mandar un valor
  @Output() parImpar = new EventEmitter<string>();

  constructor(){
    this.mensaje = "";
    this.valor = -1;
  }

  calcularParImpar() : void {
    this.mensaje = this.valor % 2 === 0 ? `La suma de las balotas es: ${this.valor} y es par` : `La suma de las boletas es: ${this.valor} y es impar`
    this.parImpar.emit(this.mensaje);
  }
}
