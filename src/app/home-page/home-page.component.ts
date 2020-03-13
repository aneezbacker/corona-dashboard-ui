import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface StateWiseDistribution {
  state: string;
  confirmed: number;
  cured: number;
  deaths: number;
}

// TODO: load from database
const stateWiseDistributionData: StateWiseDistribution[] = [
  {state: 'Andhra Pradesh', confirmed: 1, cured: 0, deaths: 0},
  {state: 'Delhi', confirmed: 7, cured: 1, deaths: 1},
  {state: 'Haryana', confirmed: 4, cured: 0, deaths: 0},
  {state: 'Jammu & Kashmir (UT)', confirmed: 1, cured: 0, deaths: 0},
  {state: 'Karnataka', confirmed: 6, cured: 0, deaths: 1},
  {state: 'Kerala', confirmed: 19, cured: 3, deaths: 0},
  {state: 'Ladakh (UT)', confirmed: 3, cured: 0, deaths: 0},
  {state: 'Maharashtra', confirmed: 14, cured: 0, deaths: 0},
  {state: 'Punjab', confirmed: 1, cured: 0, deaths: 0},
  {state: 'Rajasthan', confirmed: 3, cured: 1, deaths: 0},
  {state: 'Tamil Nadu', confirmed: 1, cured: 0, deaths: 0},
  {state: 'Telengana', confirmed: 1, cured: 0, deaths: 0},
  {state: 'Uttar Pradesh', confirmed: 11, cured: 5, deaths: 0}
];


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayedColumns = ['state', 'confirmed', 'cured', 'deaths'];
  dataSource = new MatTableDataSource(stateWiseDistributionData);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.sort.sort({ id: 'confirmed', start: 'desc', disableClear: false });
    this.dataSource.sort = this.sort;
  }

}
