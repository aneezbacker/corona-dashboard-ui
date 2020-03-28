import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {DataService} from '../data.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-testing-centres',
  templateUrl: './testing-centres.component.html',
  styleUrls: ['./testing-centres.component.css']
})
export class TestingCentresComponent implements OnInit {

  @ViewChild('stateAccordion') stateAccordion: MatAccordion;

  tcData = null;
  statePanelOpenState = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.loadTestingCentresData();
  }

  toggleStateAccordion(): void {
    this.statePanelOpenState ? this.stateAccordion.closeAll() : this.stateAccordion.openAll();
    this.statePanelOpenState = !this.statePanelOpenState;
  }

  loadTestingCentresData(): void {
    this.dataService.getTestingCentre().subscribe(data => {
      this.tcData = data;
    });
  }

}
