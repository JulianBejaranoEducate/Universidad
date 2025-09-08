import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nota } from '../models/task';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directive-ng-for',
  imports: [CommonModule],
  templateUrl: './directive-ng-for.html',
  styleUrl: './directive-ng-for.css'
})
export class DirectiveNgFor {
  //Declaración de propiedades o atributos
  public notas!:Nota[];
  newNota?: Nota;
  editarNota: Nota | null = null;

  constructor() {
    this.notas = [
      {id:1 , title: 'Parcial Web-Programación', nota:2.3, estado:'Reprobada'}
    ];
  }

  guardar(id:number, title:string, nota:number, estado?:string | null): void {
    this.newNota = {id, title, nota, estado};
    this.notas.push(this.newNota);
    console.log('La nota ha sido modificada', this.newNota);
  }

  actualizar(id:number, title:string, nota:number, estado?:string | null): void {
    const actualizar = this.notas.findIndex(nota => nota.id === id);
    if (actualizar !== -1) {
      this.notas[actualizar] = {id, title, nota, estado};
      console.log('La nota ha sido actualizada:', this.notas[actualizar]);
      this.editarNota = null;
    }
  }

  eliminar(id:number): void {
    const eliminarNota = this.notas.findIndex(nota => nota.id === id);
    if (eliminarNota !== -1) {
      this.notas.splice(eliminarNota, 1);
      console.log('Nota eliminada con el ID', id);
    }
  }

  startEdit(nota: Nota): void {
    // Crear una copia de la tarea para editir
    this.editarNota = {...nota};
  }

  cancelarEdit(): void {
    this.editarNota = null;
  }
}
