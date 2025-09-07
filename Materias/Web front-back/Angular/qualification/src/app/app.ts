import { Component, Directive, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DirectiveNgIf } from './components/directive-ng-if/directive-ng-if';
import { DirectiveNgSw } from './components/directive-ng-sw/directive-ng-sw';
import { DirectiveNgFor } from './components/directive-ng-for/directive-ng-for';

@Component({
  selector: 'app-root',
  imports: [
    DirectiveNgIf,
    DirectiveNgSw,
    DirectiveNgFor,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('qualification');
}
