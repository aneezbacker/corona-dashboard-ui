import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';


export interface StateWiseDistribution {
  state: string;
  confirmed: number;
  cured: number;
  deaths: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayedColumns = ['state', 'deaths', 'cured', 'confirmed'];
  dataSource: any;

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.loadStateWiseDistributionData();
  }

  loadStateWiseDistributionData(): void {
    this.dataService.getSummary('stateWiseDistribution').subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.sort.sort({id: 'confirmed', start: 'desc', disableClear: false});
      this.dataSource.sort = this.sort;
    });
  }

}
