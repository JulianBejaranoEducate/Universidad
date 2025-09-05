import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParImpar } from './components/par-impar/par-impar';
import { Balota } from './components/balota/balota';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParImpar, Balota],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  valor1 : number;
  valor2 : number;
  numeroGanador : string;
  mensaje : string;
  suma : number;

  constructor(){
    this.valor1 =- 1;
    this.valor2 =- 1;
    this.numeroGanador = "";
    this.mensaje = "";
    this.suma = 0;
  }

  getBalotaJuego() : number{
    let numeroBalota : number;
    numeroBalota = Math.floor(Math.random()*9)+1;
    return numeroBalota;
  }

  jugar() : void{
    this.valor1 = this.getBalotaJuego();
    this.valor2 = this.getBalotaJuego();
    this.numeroGanador = `El numero ganador es ${this.valor1} ${this.valor2}`;
    this.suma = this.valor1 + this.valor2;

  }

  getParImpar(mensaje:string) : void{
    this.mensaje = mensaje;

  }

}
