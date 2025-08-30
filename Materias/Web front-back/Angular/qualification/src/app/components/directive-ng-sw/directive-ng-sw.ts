import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ng-sw',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directive-ng-sw.html',
  styleUrl: './directive-ng-sw.css'
})
export class DirectiveNgSw {
  estado:string = 'pendiente';
}
