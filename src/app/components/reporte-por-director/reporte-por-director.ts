import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartType,
  ChartData,
  ChartOptions
} from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-reporte-por-director-component',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './reporte-por-director.html'
})
export class ReportePorDirectorComponent {
  directores = ['Quentin Tarantino', 'Christopher Nolan', 'Greta Gerwig'];
  directorSeleccionado = '';
  datos: { genero: string; cantidad: number }[] = [];

  chartType: ChartType = 'bar';

  chartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [{ data: [], label: 'Películas por género' }],
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };

  buscarDatos() {
    this.datos = [
      { genero: 'Acción', cantidad: 5 },
      { genero: 'Drama', cantidad: 3 },
      { genero: 'Comedia', cantidad: 2 },
    ];
    this.chartData = {
      labels: this.datos.map(d => d.genero),
      datasets: [{
        label: 'Películas por género',
        data: this.datos.map(d => d.cantidad),
        backgroundColor: ['#60a5fa', '#f87171', '#34d399'],
      }]
    };
  }
}
