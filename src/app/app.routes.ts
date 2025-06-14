import { Routes } from '@angular/router';
import {TopPeliculasComponent} from './components/top-peliculas/top-peliculas';
import {ReportePorDirectorComponent} from './components/reporte-por-director/reporte-por-director';
import {ReportePorActor} from './components/reporte-por-actor/reporte-por-actor';
import {ReportePorCalificacionComponent} from './components/reporte-por-calificacion/reporte-por-calificacion';

export const routes: Routes = [
  {path: '', redirectTo: 'top-peliculas', pathMatch: "full"},
  {path: 'top-peliculas', component: TopPeliculasComponent},
  {path: 'reporte-por-director', component: ReportePorDirectorComponent},
  {path: 'reporte-por-actor', component: ReportePorActor},
  {path: 'reporte-por-calificacion', component: ReportePorCalificacionComponent}
];
