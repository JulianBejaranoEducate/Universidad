import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Users } from '../../service/users';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-comp-users',
  imports: [
    CommonModule
  ],
  templateUrl: './comp-users.html',
  styleUrl: './comp-users.css'
})
export class CompUsers {
  data: User[]; //Declaramos un arreglo vacio
  private myServiceUsers = inject(Users);

  constructor(){
    this.data = [];
  }
  
  ngOnInit():void{
    this.myServiceUsers.getUsers().subscribe(
      {
        next: (datos) => {
          this.data = datos;
          console.log('this.data');
        },
        error: (err) => console.log('Error en la API', err),
        complete: () => console.log('Se ha completado la petición')
      }
    );
  }
}
