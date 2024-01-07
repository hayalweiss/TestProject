import { Injectable } from '@angular/core';
import { RateHistory } from '../Models/rate';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  listHistory: RateHistory[] =  [];
}
