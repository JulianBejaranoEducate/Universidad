import { Component } from '@angular/core';
import { Task } from '../models/task';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  // Declaracion de propiedades o atributos
  public tasks!:Task[];
  newTask?: Task; //opcional
  editingTask: Task | null = null;
  // Constructor
  constructor(){
    this.tasks = [
      {id:1, title: 'Estudiar Programación Web', compled:false, category:'Estudio'},
      {id:2, title: 'Estudiar Angular', compled:true, category:'Estudio'},
      {id:3, title: 'Estudiar UX/UI', compled:false, category:'Estudio'},
      {id:4, title: 'Leer un libro', compled:false, category:null},
      {id:5, title: 'Hacer ejercicio', compled:false, category:'Salud'}
    ];
  }

  save(id:number, title:string, compled:boolean, category?:string | null): void{
    this.newTask = {id, title, compled, category};
    this.tasks.push(this.newTask);
    console.log('Tarea agregada: ', this.newTask);
  }

  delete(id:number): void{
    const eliminar = this.tasks.findIndex(task => task.id === id);
    if (eliminar !== -1) {
      this.tasks.splice(eliminar, 1);
      console.log('Tarea eliminada con ID:', id);
    }
  }
  
  update(id:number, title:string, compled:boolean, category?:string | null): void{
    const actualizar = this.tasks.findIndex(task => task.id === id);
    if (actualizar !== -1) {
      this.tasks[actualizar] = {id, title, compled, category};
      console.log('Tarea actualizada:', this.tasks[actualizar]);
      this.editingTask = null;
    }
  }

  startEdit(task: Task): void {
    // Crear una copia de la tarea para editar
    this.editingTask = {...task};
  }

  cancelEdit(): void {
    this.editingTask = null;
  }

  // hook -> 
  ngOnInit(){
    console.log("Tareas Iniciadas: ", this.tasks)
  }
}
