import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.css']
})
export class HealthTipsComponent implements OnInit {

  @ViewChild('testingAccordion') testingAccordion: MatAccordion;
  @ViewChild('mythAccordion') mythAccordion: MatAccordion;

  testingPanelOpenState = false;
  mythPanelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTestingAccordion(): void {
    this.testingPanelOpenState ? this.testingAccordion.closeAll() : this.testingAccordion.openAll();
    this.testingPanelOpenState = !this.testingPanelOpenState;
  }

  toggleMythAccordion(): void {
    this.mythPanelOpenState ? this.mythAccordion.closeAll() : this.mythAccordion.openAll();
    this.mythPanelOpenState = !this.mythPanelOpenState;
  }

}
