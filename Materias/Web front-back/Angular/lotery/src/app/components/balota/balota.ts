import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balota',
  imports: [],
  templateUrl: './balota.html',
  styleUrl: './balota.css'
})
export class Balota {
  @Input() valor : number;

  constructor(){
    this.valor =-1;
  }
}
