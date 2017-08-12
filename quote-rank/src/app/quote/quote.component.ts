import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() myQuotes;
  num: any

  constructor() {

  }

  ngOnInit() {

  }

  up_vote(ind) {
    this.myQuotes[ind].votes += 1
    this.myQuotes.sort(function(a, b) {return b.votes - a.votes})
  }
  down_vote(ind) {
    if(this.myQuotes[ind].votes <= 0) {
      this.myQuotes[ind].votes = 0
      this.myQuotes.sort(function(a, b) {return b.votes - a.votes})
    } else {
      this.myQuotes[ind].votes -= 1
      this.myQuotes.sort(function(a, b) {return b.votes - a.votes})
    }
  }
  delete_quote(ind) {
    this.myQuotes.splice(ind, 1)
  }

}
