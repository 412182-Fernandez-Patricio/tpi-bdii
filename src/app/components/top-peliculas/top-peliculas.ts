import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../movie-card/movie-card';

interface Pelicula {
  title: string;
  posterUrl: string;
  year: number;
  duration: string;
  rating: number;
}

@Component({
  selector: 'app-top-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieCardComponent],
  templateUrl: './top-peliculas.html',
})
export class TopPeliculasComponent {
  // Filtros
  desde = '';
  hasta = '';
  topX = 5;
  genero = '';
  director = '';

  // Datos fake de prueba
  peliculas = signal<Pelicula[]>([]);

  // Lista para los select
  generos = ['Acción', 'Comedia', 'Drama', 'Terror'];
  directores = ['Nolan', 'Spielberg', 'Scorsese'];

  buscar() {
    // Esto simula la llamada al back
    this.peliculas.set([
      {
        title: 'Inception',
        posterUrl: 'https://http2.mlstatic.com/D_NQ_NP_860530-MLA81194764967_122024-O.webp',
        year: 2010,
        duration: '2h 28m',
        rating: 9.2,
      },
      {
        title: 'Interstellar',
        posterUrl: 'https://mythicwall.com/cdn/shop/files/Interstellar_2BMovie_2B_2Bposter_2BPrint_2BWall_2BArt_2BPoster_2B1-W0pfS_1024x1024.jpg?v=1712634286',
        year: 2014,
        duration: '2h 49m',
        rating: 8.6,
      },
      {
        title: 'The Dark Knight',
        posterUrl: 'https://m.media-amazon.com/images/I/81rGCm0PyHL.jpg',
        year: 2008,
        duration: '2h 32m',
        rating: 9.0,
      },
      {
        title: 'The Matrix',
        posterUrl: 'https://www.originalfilmart.com/cdn/shop/products/the_matrix_1999_advance_original_film_art_d47e19ed-a6b9-47d3-985c-30197dd9ccc5_5000x.jpg?v=1599757481',
        year: 1999,
        duration: '2h 16m',
        rating: 8.7,
      },
      {
        title: 'Pulp Fiction',
        posterUrl: 'https://i5.walmartimages.com/asr/ce193b8f-4979-4dd4-89fb-cb5bda97b87b.47bd5508be83004cfd0b4ae1123a208e.jpeg',
        year: 1994,
        duration: '2h 34m',
        rating: 8.9,
      },
      {
        title: 'The Shawshank Redemption',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        year: 1994,
        duration: '2h 22m',
        rating: 9.3,
      },
      {
        title: 'Fight Club',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
        year: 1999,
        duration: '2h 19m',
        rating: 8.8,
      },
    ]);

  }
}
