import { Component } from '@angular/core';
import { RateHistory } from '../../Models/rate';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  constructor( private dataService: DataService) {
  }

  listShow: RateHistory[] = this.dataService.listHistory.reverse();
}
