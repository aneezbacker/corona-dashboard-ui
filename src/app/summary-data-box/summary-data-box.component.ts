import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-data-box',
  templateUrl: './summary-data-box.component.html',
  styleUrls: ['./summary-data-box.component.css']
})
export class SummaryDataBoxComponent implements OnInit {

  summaryData: any;

  constructor() {
  }

  ngOnInit(): void {
    // TODO: load this from backend
    this.summaryData = {
      confirmed: 81,
      cured: 4,
      deaths: 2
    };
  }

}
