import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  boxes: any = [true, true, true, true]
  on_click(x) {
    console.log(x)
    if(this.boxes[x] == true) {
      this.boxes[x] = false
    } else {
      this.boxes[x] = true
    }

  }
}
