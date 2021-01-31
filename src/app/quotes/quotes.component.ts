import { Quote } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Coders are fueled by Morning coffee',
      'David Baldaci',
      'Moonguy',
      new Date(2020, 3, 31)
    ),
    new Quote(
      'Lms is not a Bible',
      'David goliath',
      'man moon',
      new Date(2020, 3, 31)
    ),
    new Quote(
      'Prepare to master the internet',
      'Gynn Glen',
      'King tran',
      new Date(2020, 3, 31)
    )
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit() {}
}
