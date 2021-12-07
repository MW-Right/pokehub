import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';
  routes: Route[] = routes;

  print(message: string): void {
    console.log(message);
  }
}
