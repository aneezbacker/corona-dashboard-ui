import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-humour',
  templateUrl: './humour.component.html',
  styleUrls: ['./humour.component.css']
})
export class HumourComponent implements OnInit {

  imgCountFile = 'imageCount';
  imgCount = 10;
  imagesList = null;

  constructor(private dataService: DataService) {
    console.log('-----------const');
    this.dataService.getSummary(this.imgCountFile).subscribe(data => {
      this.imgCount = data.count;
      console.log('-----------this.imgCount: ' + this.imgCount);

      let imagesListArr = [];
      let arrIndex = 0;
      for (let i = this.imgCount; i > 0; i--) {
        const url = 'https://storage.googleapis.com/corona-dashboard-files-bucket/images/' + i + '.jpg';
        imagesListArr[arrIndex] = {
          url: url,
          show: false
        };
        arrIndex++;
      }

      this.imagesList = imagesListArr;
    });
  }

  ngOnInit(): void {

  }

}
