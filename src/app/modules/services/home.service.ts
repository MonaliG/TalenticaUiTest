import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  headerMenuClick = new Subject<any>();

  onHeaderMenuClick(value) {
    this.headerMenuClick.next(value);
  }

  constructor() { }
}
