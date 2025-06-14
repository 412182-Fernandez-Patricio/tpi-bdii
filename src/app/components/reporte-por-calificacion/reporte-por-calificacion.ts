import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-reporte-por-calificacion',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './reporte-por-calificacion.html',
})
export class ReportePorCalificacionComponent {
  peliculas = ['Pulp Fiction', 'Inception', 'Barbie'];
  peliculaSeleccionada = '';

  chartType: ChartType = 'bar';

  chartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [{ data: [] }],
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        title: { display: true, text: 'Calificación (1 a 10)' },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Cantidad de usuarios' },
        ticks: { stepSize: 1 },
      },
    },
  };

  buscarDatos() {
    const datosSimulados: { [key: string]: number[] } = {
      'Pulp Fiction': [0, 1, 2, 4, 5, 6, 8, 10, 12, 15],
      'Inception':    [1, 2, 2, 3, 5, 7, 8, 9, 10, 13],
      'Barbie':       [0, 0, 2, 4, 5, 7, 6, 5, 3, 2],
    };


    const calificaciones = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

    this.chartData = {
      labels: calificaciones,
      datasets: [
        {
          data: datosSimulados[this.peliculaSeleccionada] || [],
          backgroundColor: '#60a5fa',
        },
      ],
    };
  }
}
