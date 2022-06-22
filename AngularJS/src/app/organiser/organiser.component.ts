import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-organiser',
  templateUrl: './organiser.component.html',
  styleUrls: ['./organiser.component.scss']
})
export class OrganiserComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  // data = Data;

  // nData = new CalendarComponent;

  title = 'Органайзер';

}
