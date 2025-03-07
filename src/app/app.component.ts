import { Component } from '@angular/core';
import { Route, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  navRoutes: Routes = routes
}
