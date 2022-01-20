import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  VERSION,
  ViewChild,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  outputDateFormat = 'MMM DD yyyy';
  selected: Date | null;
  // Range to show.               // (num_of_days) * 24 * 60 * 60 * 1000
  minDate = new Date(new Date().getTime() - 60 * 24 * 60 * 60 * 1000);
  maxDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

  @ViewChild(MatCalendar, { static: false }) calendar: MatCalendar<Date>;

  constructor(public renderer: Renderer2) {}

  ngOnInit() {}

  dateChanged(dateObject) {
    console.log(dateObject);
  }

  loadMonth() {
    const calendardate = document.querySelectorAll('.mat-calendar-body-cell');

    if (calendardate) {
      Array.from(calendardate).forEach((d) => {
        this.renderer.listen(d, 'click', () => {
          //console.log('date select', d.textContent);
          console.log('date select', this.calendar.selected);
        });
      });
    }
  }

  ngAfterViewInit() {
    this.loadMonth();
    const buttons = document.querySelectorAll(
      '.mat-calendar-previous-button, .mat-calendar-next-button'
    );
    if (buttons) {
      Array.from(buttons).forEach((button) => {
        this.renderer.listen(button, 'click', (e) => {
          console.log('Arrow buttons clicked', e);
          this.loadMonth();
        });
      });
    }
  }
}
