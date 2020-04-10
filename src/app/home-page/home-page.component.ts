declare var require: any;

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';
import {UtilService} from '../util.service';
import {MatSnackBar} from '@angular/material/snack-bar';
//import * as Highcharts from 'highcharts/highmaps';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
//import mapDataWorld from '@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json';

const mapWorld = require('@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json');

MapModule(Highcharts);

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

  displayedColumns = ['state', 'deaths', 'cured', 'active', 'confirmed'];
  dataSource: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartOptions = null;


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
      horizontalPosition: 'center',
      panelClass: ['snackbar-background', 'snackbar-text']
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
      this.sort.sort({id: 'confirmed', start: 'desc', disableClear: true});
      this.dataSource.sort = this.sort;

      this.showMap(data);
    });
  }

  showMap(stateWiseDistributionData): void {

    var mapData = this.createMapData(stateWiseDistributionData);

    this.chartOptions = {
      chart: {
        map: mapWorld
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      colorAxis: {
        min: 0
      },
      series: [{
        name: 'Confirmed Cases',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        },
        allAreas: false,
        data: mapData
      }]
    };
  }

  createMapData(stateWiseDistributionData) {
    var data = [];
    var scSummaryMap = stateWiseDistributionData.scSummaryMap;

    data[1] = ['andaman and nicobar', scSummaryMap['Andaman and Nicobar Islands'] ? scSummaryMap['Andaman and Nicobar Islands'].confirmed : 0];
    data[2] = ['andhra pradesh', scSummaryMap['Andhra Pradesh'] ? scSummaryMap['Andhra Pradesh'].confirmed : 0];
    data[3] = ['arunanchal pradesh', scSummaryMap['Arunachal Pradesh'] ? scSummaryMap['Arunachal Pradesh'].confirmed : 0];
    data[4] = ['assam', scSummaryMap['Assam'] ? scSummaryMap['Assam'].confirmed : 0];
    data[5] = ['bihar', scSummaryMap['Bihar'] ? scSummaryMap['Bihar'].confirmed : 0];
    data[6] = ['chandigarh', scSummaryMap['Chandigarh'] ? scSummaryMap['Chandigarh'].confirmed : 0];
    data[7] = ['chhattisgarh', scSummaryMap['Chhattisgarh'] ? scSummaryMap['Chhattisgarh'].confirmed : 0];
    data[8] = ['dadara and nagar havelli', scSummaryMap['Dadara and Nagar Havelli'] ? scSummaryMap['Dadara and Nagar Havelli'].confirmed : 0];
    data[9] = ['daman and diu', scSummaryMap['Daman and Diu'] ? scSummaryMap['Daman and Diu'].confirmed : 0];
    data[10] = ['goa', scSummaryMap['Goa'] ? scSummaryMap['Goa'].confirmed : 0];
    data[11] = ['gujarat', scSummaryMap['Gujarat'] ? scSummaryMap['Gujarat'].confirmed : 0];
    data[12] = ['haryana', scSummaryMap['Haryana'] ? scSummaryMap['Haryana'].confirmed : 0];
    data[13] = ['himachal pradesh', scSummaryMap['Himachal Pradesh'] ? scSummaryMap['Himachal Pradesh'].confirmed : 0];
    data[14] = ['karnataka', scSummaryMap['Karnataka'] ? scSummaryMap['Karnataka'].confirmed : 0];
    data[15] = ['kerala', scSummaryMap['Kerala'] ? scSummaryMap['Kerala'].confirmed : 0];
    data[16] = ['jammu and kashmir', (scSummaryMap['Jammu and Kashmir'] ? scSummaryMap['Jammu and Kashmir'].confirmed : 0) + (scSummaryMap['Ladakh'] ? scSummaryMap['Ladakh'].confirmed : 0)];
    data[17] = ['jharkhand', scSummaryMap['Jharkhand'] ? scSummaryMap['Jharkhand'].confirmed : 0];
    data[18] = ['lakshadweep', scSummaryMap['Lakshadweep'] ? scSummaryMap['Lakshadweep'].confirmed : 0];
    data[19] = ['madhya pradesh', scSummaryMap['Madhya Pradesh'] ? scSummaryMap['Madhya Pradesh'].confirmed : 0];
    data[20] = ['maharashtra', scSummaryMap['Maharashtra'] ? scSummaryMap['Maharashtra'].confirmed : 0];
    data[21] = ['manipur', scSummaryMap['Manipur'] ? scSummaryMap['Manipur'].confirmed : 0];
    data[22] = ['meghalaya', scSummaryMap['Meghalaya'] ? scSummaryMap['Meghalaya'].confirmed : 0];
    data[23] = ['mizoram', scSummaryMap['Mizoram'] ? scSummaryMap['Mizoram'].confirmed : 0];
    data[24] = ['nagaland', scSummaryMap['Nagaland'] ? scSummaryMap['Nagaland'].confirmed : 0];
    data[25] = ['nct of delhi', scSummaryMap['Delhi'] ? scSummaryMap['Delhi'].confirmed : 0];
    data[26] = ['odisha', scSummaryMap['Odisha'] ? scSummaryMap['Odisha'].confirmed : 0];
    data[27] = ['puducherry', scSummaryMap['Puducherry'] ? scSummaryMap['Puducherry'].confirmed : 0];
    data[28] = ['punjab', scSummaryMap['Punjab'] ? scSummaryMap['Punjab'].confirmed : 0];
    data[29] = ['rajasthan', scSummaryMap['Rajasthan'] ? scSummaryMap['Rajasthan'].confirmed : 0];
    data[30] = ['sikkim', scSummaryMap['Sikkim'] ? scSummaryMap['Sikkim'].confirmed : 0];
    data[31] = ['tamil nadu', scSummaryMap['Tamil Nadu'] ? scSummaryMap['Tamil Nadu'].confirmed : 0];
    data[32] = ['telangana', scSummaryMap['Telengana'] ? scSummaryMap['Telengana'].confirmed : 0];
    data[33] = ['tripura', scSummaryMap['Tripura'] ? scSummaryMap['Tripura'].confirmed : 0];
    data[34] = ['uttarakhand', scSummaryMap['Uttarakhand'] ? scSummaryMap['Uttarakhand'].confirmed : 0];
    data[35] = ['uttar pradesh', scSummaryMap['Uttar Pradesh'] ? scSummaryMap['Uttar Pradesh'].confirmed : 0];
    data[36] = ['west bengal', scSummaryMap['West Bengal'] ? scSummaryMap['West Bengal'].confirmed : 0];

    return data;
  }


}
