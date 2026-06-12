import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Contact } from "./pages/contact/contact";
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('vithalgutti');
}
