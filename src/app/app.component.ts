import { Component, computed, Inject, inject, Injector } from '@angular/core';
import { Route, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { routes } from './app.routes';
import { Ressource2 } from './app.config';
import { HttpClient } from '@angular/common/http';
import { ListCourseService } from './services/list-course.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  navRoutes: Routes = routes

  // injection par propriétés
  httpClient = inject(HttpClient);
  lisCourseService = inject(ListCourseService);
  //autreRessource = inject(Ressource2);
  temp: any;
  count: any;
  pressure: any;
  
  constructor(
    @Inject('ressource1') ressource: number,
  // injection par constructeur
  // autreRessource: Ressource2
     ) {
    this.httpClient.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: 50.5,
        lon: 4.5,
        units: 'metric',
        appid: '631d8910e6e2b10be6d70baee2b38510'
            }
    }).subscribe((weatherInfo: any) => {
      this.temp = weatherInfo.main.temp,
      this.pressure = weatherInfo.main.pressure
    })
     // this.autreRessource.method();
     this.count = computed(() => this.lisCourseService.list().filter(a => a.important).length)
  }
}
