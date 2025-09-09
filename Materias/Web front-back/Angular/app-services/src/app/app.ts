import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompUsers } from './components/comp-users/comp-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompUsers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-services');
}
