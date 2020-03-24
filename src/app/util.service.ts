import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
  }

  /**
   * Return absolute value of number
   */
  abs(val: number): number {
    return Math.abs(val);
  }
}
