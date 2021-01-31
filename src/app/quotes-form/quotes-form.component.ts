import { Quote } from './../quotes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newQuote = new Quote('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor() {}

  ngOnInit() {}
}
