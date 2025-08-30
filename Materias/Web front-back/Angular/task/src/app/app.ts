import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskHeader } from './components/task-header/task-header';
import { TaskFooter } from './components/task-footer/task-footer';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskHeader, TaskFooter, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
