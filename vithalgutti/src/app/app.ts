import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('vithalgutti');
}
