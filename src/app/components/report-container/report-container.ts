import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-report-container',
  imports: [
    NgIf
  ],
  templateUrl: './report-container.html',
  styleUrl: './report-container.css'
})
export class ReportContainer {
  @Input() izquierdaPrimero: boolean = true;
}
