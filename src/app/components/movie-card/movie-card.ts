import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-movie-card',
  standalone: true,  // <--- esto!
  imports: [CommonModule], // usualmente importa CommonModule para usar directivas comunes
  templateUrl: 'movie-card.html',
  styleUrls: ['movie-card.css'],
})
export class MovieCardComponent {
  @Input() posterUrl!: string;
  @Input() title!: string;
  @Input() year!: number;
  @Input() duration!: string;
  @Input() rating!: number;

}
