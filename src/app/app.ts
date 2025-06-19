import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Reports} from './components/reports/reports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, Navbar, Reports],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'tpi-bdii';
}

