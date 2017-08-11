import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = function () {
    var list = ['Azure', 'Black', 'Blue', 'BlueViolet', 'CadetBlue', 'Pink', 'Chocolate', 'Coral', 'Cornsilk', 'Crimson', 'DarkMagenta', 'Red']
    for(var i = 0; i < list.length; i++) {
      var temp = list[i]
      var num = Math.trunc(Math.random() * list.length)
      list[i] = list[num]
      list[num] = temp
    }
    return list 
  }
}
