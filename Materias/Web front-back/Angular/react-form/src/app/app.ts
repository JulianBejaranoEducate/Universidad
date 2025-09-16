import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormExample } from './components/form-example/form-example';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormExample,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('react-form');
}
