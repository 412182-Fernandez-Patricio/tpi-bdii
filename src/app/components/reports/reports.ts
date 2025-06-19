import { Component } from '@angular/core';
import {ReportContainer} from '../report-container/report-container';
import {CodeBlock} from '../code-block/code-block';

@Component({
  selector: 'app-reports',
  imports: [
    ReportContainer,
    CodeBlock
  ],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {


}
