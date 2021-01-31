import { Quote } from './quotes';
import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes app';
  quotes: Quote[] = [
    new Quote(
      'Coders are fueled by Morning coffee',
      'David Baldaci',
      'Moonguy',
      new Date(2021, 1, 31)
    ),
    new Quote(
      'Lms is not a Bible',
      'David goliath',
      'man moon',
      new Date(2021, 1, 31)
    ),
    new Quote(
      'Prepare to master the internet',
      'Gynn Glen',
      'King tran',
      new Date(2021, 1, 31)
    )
  ];
}
