import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  date: string;
  type: 'string';

  constructor(public calendar: Calendar) {
    
   }

  ngOnInit() {
   
  }

  onChange($event) {
    console.log($event);
  }

}
