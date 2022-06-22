import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  constructor(public dateService: DateService) { }

  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
