import { Quote } from './../quotes';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Coders are fueled by Morning coffee',
      'Moon man',
      'Moonguy',
      new Date(2020, 3, 31)
    ),
    new Quote(
      'Lms is not a Bible',
      'Moonguy',
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

  @Input()
  quote!: Quote;

  toggleDetails(index:any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].user}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  startNum:any;
  lastNum:any;
  ctr?:number;

  hUpvote(){

    this.startNum = 0
    this.lastNum = 0

    for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
    this.lastNum = this.quotes[this.ctr].uvotes;

    if (this.lastNum > this.startNum){
        this.startNum = this.lastNum
    }
} 

return this.startNum
} 


  constructor() {}

  ngOnInit() {}
}
