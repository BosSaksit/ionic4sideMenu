import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  selectDay: any
  selectDaycut: any
  monthEng: string
  monthNumber: string
  showDate:string

  minDate = new Date().toISOString();

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }
  viewTitle = '';

  // @ViewChild(CalendarComponent) myCal: CalendarComponent;


  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) {

  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  addEvent() {

  }

  ngOnInit() {
    this.resetEvent();
  }

  async onEvenSelected(event) {
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  onTitleChanged(title) {
    this.viewTitle = title;
  }
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
    this.selectDay = selected
    console.log(this.selectDay);
    var splitDate = selected.toString().split(" ", 4)
    console.log(splitDate);
    this.selectDaycut = splitDate[0] + splitDate[2] + splitDate[1] + splitDate[3]
    console.log(this.selectDaycut);
    this.checkMonthNumber(splitDate[1]);
    this.checkMonth(splitDate[1]);
    this.selectDaycut = splitDate[2] + "/" + this.monthNumber + "/" + splitDate[3]
    console.log(this.selectDaycut);
    this.showDate = this.selectDaycut;
    console.log(this.showDate);
    
  }

  checkMonthNumber(month) {
    switch (month) {
      case "Jan":
        this.monthNumber = "01"
        break;
      case "Feb":
        this.monthNumber = "02"
        break;
      case "Mar":
        this.monthNumber = "03"
        break;
      case "Apr":
        this.monthNumber = "04"
        break;
      case "May":
        this.monthNumber = "05"
        break;
      case "Jun":
        this.monthNumber = "06"
        break;
      case "Jul":
        this.monthNumber = "07"
        break;
      case "Aug":
        this.monthNumber = "08"
        break;
      case "Sep":
        this.monthNumber = "09"
        break;
      case "Oct":
        this.monthNumber = "10"
        break;
      case "Nov":
        this.monthNumber = "11"
        break;
      case "Dec":
        this.monthNumber = "12"
        break;


      default:
        break;
    }
  }

  checkMonth(month) {
    switch (month) {
      case "Jan":
        this.monthEng = "January"
        break;
      case "Feb":
        this.monthEng = "February"
        break;
      case "Mar":
        this.monthEng = "March"
        break;
      case "Apr":
        this.monthEng = "April"
        break;
      case "May":
        this.monthEng = "May"
        break;
      case "Jun":
        this.monthEng = "June"
        break;
      case "Jul":
        this.monthEng = "July"
        break;
      case "Aug":
        this.monthEng = "August"
        break;
      case "Sep":
        this.monthEng = "September"
        break;
      case "Oct":
        this.monthEng = "October"
        break;
      case "Nov":
        this.monthEng = "November"
        break;
      case "Dec":
        this.monthEng = "December"
        break;


      default:
        break;
    }
  }

}
