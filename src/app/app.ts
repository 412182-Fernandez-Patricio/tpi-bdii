import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {MovieCardComponent} from './components/movie-card/movie-card';
import {TopPeliculasComponent} from './components/top-peliculas/top-peliculas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, MovieCardComponent, TopPeliculasComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'tpi-bdii';
}
