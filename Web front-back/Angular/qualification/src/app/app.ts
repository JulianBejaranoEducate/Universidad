import { Component, signal } from '@angular/core';
import { DirectiveNgIf } from './components/directive-ng-if/directive-ng-if';
import { DirectiveNgSw } from './components/directive-ng-sw/directive-ng-sw';

@Component({
  selector: 'app-root',
  imports: [
    DirectiveNgIf,
    DirectiveNgSw
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('qualification');
}
