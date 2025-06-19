import { Routes } from '@angular/router';
import {TopPeliculasComponent} from './components/top-peliculas/top-peliculas';
import {Reports} from './components/reports/reports';

export const routes: Routes = [
  {path: '', redirectTo: 'top-peliculas', pathMatch: "full"},
  {path: 'top-peliculas', component: TopPeliculasComponent},
  {path: 'reportes', component: Reports}
];
