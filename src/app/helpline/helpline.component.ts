import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';

export interface StateWiseHelpline {
  state: string;
  helplineNo: string;
}

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {

  displayedColumns = ['state', 'helplineNo'];
  dataSource: any;

  showRevealButton = true;
  showEmail = false;
  email = '';


  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.loadStateWiseHelplineNo();
  }

  loadStateWiseHelplineNo(): void {
    this.dataService.getSummary('stateWiseHelpline').subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.sort.sort({id: 'confirmed', start: 'desc', disableClear: false});
      this.dataSource.sort = this.sort;
    });
  }

  public onRevealBtnClick(): void {
    this.showRevealButton = false;
    this.showEmail = true;
    this.email = 'ncov2019@gmail.com';
  }
}
