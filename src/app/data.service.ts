import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getSummary(dataSource): Observable<any> {
    return this.http.get('https://storage.googleapis.com/corona-dashboard-bucket/data/' + dataSource + '.json');
  }
}
