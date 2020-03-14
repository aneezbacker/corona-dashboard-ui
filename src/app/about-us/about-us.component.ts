import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  showRevealButton = true;
  showEmail = false;
  email = '';

  constructor() {
  }

  public onRevealBtnClick(): void {
    this.showRevealButton = false;
    this.showEmail = true;
    this.email = 'corona[dot]info[dot]in[at]gmail.com';
  }

  ngOnInit(): void {
  }

}
