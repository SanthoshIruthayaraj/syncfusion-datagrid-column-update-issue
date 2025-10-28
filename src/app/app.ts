import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridExample } from "./components/grid-example/grid-example";

@Component({
  selector: 'app-root',
  imports: [GridExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sfgrid');
}
