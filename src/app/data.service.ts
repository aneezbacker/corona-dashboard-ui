import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getSummary(dataSource): Observable<any> {
    const randomNo = new Date().getTime();  // random id to append to request to prevent caching
    return this.http.get(environment.cdnUrl + '/summaryData/' + dataSource + '.json?reqId=' + randomNo);
  }

  public getTestingCentre(): Observable<any> {
    const randomNo = new Date().getTime();  // random id to append to request to prevent caching
    return this.http.get('https://storage.googleapis.com/corona-dashboard-files-bucket/summaryData/testingCentres.json?reqId=' + randomNo);
  }

}
