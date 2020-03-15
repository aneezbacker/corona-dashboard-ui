import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-summary-data-box',
  templateUrl: './summary-data-box.component.html',
  styleUrls: ['./summary-data-box.component.css']
})
export class SummaryDataBoxComponent implements OnInit {

  @Input()
  dataSrc: string;

  @Input()
  showConfirmedData: boolean;

  @Input()
  showCuredData: boolean;

  @Input()
  showDeathData: boolean;

  summaryData: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getSummary(this.dataSrc).subscribe(data => {
      this.summaryData = data;
    });
  }

}
