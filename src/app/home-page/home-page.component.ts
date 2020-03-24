import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';
import {UtilService} from '../util.service';
import {MatSnackBar} from '@angular/material/snack-bar';


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

  displayedColumns = ['state', 'deathsTotal', 'curedTotal', 'activeTotal', 'confirmedTotal'];
  dataSource: any;

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  constructor(private snackBar: MatSnackBar, private dataService: DataService, public utilService: UtilService) {
  }

  ngOnInit(): void {
    this.loadStateWiseDistributionData();
    this.loadSnackBarData();

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  loadSnackBarData(): void {
    this.dataService.getSummary('snackBarMessage').subscribe(data => {
      if (data && data.message) {
        this.openSnackBar(data.message, null);
      }
    });
  }

  loadStateWiseDistributionData(): void {
    this.dataService.getSummary('stateWiseCasesSummary').subscribe(data => {
      const scArr = Object.keys(data.scSummaryMap).map((key) => data.scSummaryMap[key]);
      this.dataSource = new MatTableDataSource(scArr);
      this.sort.sort({id: 'confirmedTotal', start: 'desc', disableClear: true});
      this.dataSource.sort = this.sort;
    });
  }
}
