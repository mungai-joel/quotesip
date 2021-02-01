import { Quote } from './quotes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes app';
  quotes: Quote[] = [
    new Quote(
      'Coders are fueled by Morning coffee',
      'Moon man',
      'Moonguy',
      new Date(2021, 1, 31)
    ),
    new Quote(
      'Lms is not a Bible',
      'Moonguy',
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
