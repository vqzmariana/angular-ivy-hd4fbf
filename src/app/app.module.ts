import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DateFormatDirective } from './date-format.directive';

// export const DATE_FORMATS = {
//   parse: {
//     dateInput: ['MMM DD yyyy'],
//   },
//   display: {
//     dateInput: 'MMM DD yyyy',
//     monthYearLabel: 'MMM yyyy',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM yyyy',
//   },
// };

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    MatFormFieldModule,
    // ReactiveFormsModule,
    MatDatepickerModule,
    // MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  declarations: [AppComponent, 
    // HelloComponent, DateFormatDirective
  ],
  bootstrap: [AppComponent],
  providers: [
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    // },
    // { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
})
export class AppModule {}
