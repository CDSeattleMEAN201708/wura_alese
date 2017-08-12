import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number = 0
  quote = {
    content: '',
    author: '',
    votes: 0
  }
  quotes = []
  add_quote() {
    this.quotes.push(this.quote)
    this.quotes.sort(function(a, b) {return b.votes - a.votes})
    this.quote = {
      content: '',
      author: '',
      votes: 0
    }
  }
}
