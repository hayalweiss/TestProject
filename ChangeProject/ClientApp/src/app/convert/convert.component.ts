import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Rate, RateHistory } from '../../Models/rate';
import { DataService } from '../data.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  data: string = '{"success": true, "timestamp": 1704191944, "base": "EUR", "date": "2024-01-02", "rates": {"AED": 4.042135, "AFN": 77.946943, "ALL": 103.567403, "AMD": 446.417706, "ANG": 1.989249, "AOA": 912.217194, "ARS": 889.834918, "AUD": 1.614977, "AWG": 1.981168, "AZN": 1.869937 }}  ';
  AllItems!: Rate;
  rateList!: any[];
  listHistory!: RateHistory[];
  txtRes1: string = '';
  numSelect!: number;
  rateHistoryItem: RateHistory = {
    num: undefined, option1: { key: '', value: 0 }, option2: { key: '', value: 0 }
  };

  constructor(private keyvaluePipe: KeyValuePipe, private dataService: DataService, private http: HttpClient) {
  }

  ngOnInit(): void {
    //let url = 'http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&amp;format=1';
    //this.http.get<Rate>(url).subscribe(data => {
    //  this.AllItems = data;
    //  this.rateList = this.keyvaluePipe.transform(this.AllItems.rates);
    //})
    
    this.AllItems = JSON.parse(this.data);
    this.rateList = this.keyvaluePipe.transform(this.AllItems.rates);
  }



  selectedOptions1: any;
  selectedOptions2: any;

  suggestions: any[] = [];

  filter(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.rateList.length; i++) {
      let option = this.rateList[i].key;
      if (option && option.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(this.rateList[i]);
      }
    }

    this.suggestions = filtered;
  }

  onChange(obj: any) {
    //if (this.rateHistoryItem.num == 0 )
    this.onNumChange();
    // else
    //   this.txtRes1 = '';
  }


  onNumChange() {
    var num = this.rateHistoryItem.num;
    debugger;
    if (num && num < 0) {
      this.rateHistoryItem.num = undefined;
      return;
    }

    var val1 = this.rateHistoryItem.option1.value;
    var txt1 = this.rateHistoryItem.option1.key;

    var val2 = this.rateHistoryItem.option2.value;
    var txt2 = this.rateHistoryItem.option2.key;

    if (num != undefined && num >= 0) {
      if (val1 && val2) {
        this.txtRes1 = (val1 * num).toString() + ' ' + txt1 + ' = ' + (val2 * num).toString() + ' ' + txt2;
        //Clone object  insted of copy
        let objCopy = JSON.parse(JSON.stringify(this.rateHistoryItem));
        objCopy.option1.value = objCopy.option1.value * num;
        objCopy.option2.value = objCopy.option2.value * num;
        this.dataService.listHistory.push(objCopy);
      }
    }
    else
      this.txtRes1 = '';
  }

}
