import { Component, OnInit } from '@angular/core';
import { Player } from '../player'
import { GameService } from '../game.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-1',
  templateUrl: './game-1.component.html',
  styleUrls: ['./game-1.component.css']
})
export class Game1Component implements OnInit {

  all_players: any = []
  constructor(private service: GameService, private router: Router) { }

  ngOnInit() {
    this.service.retrieve_players()
    .then(data => {
      this.all_players = data
      for(var i=0; i < this.all_players.length; i++) {
        this.all_players[i].boxes = [
          {status: false, name: 'Playing', color: 'green'},
          {status: false, name: 'Not Playing', color: 'red'},
          {status: true, name: 'Undecided', color: 'yellow'}
        ]
      }
    })
    .catch(errors => console.log(errors, '*(*(*(**)))'))


  }
  on_click(ply_ind, bx_ind) {
    for(var i=0; i < this.all_players.length; i++) {
      if(ply_ind == i){
        for(var j=0; j < this.all_players[i].boxes.length; j++) {
          if(j==bx_ind){
            this.all_players[i].boxes[j].status = true
          } else {
            this.all_players[i].boxes[j].status = false
          }
        }
      } else{
        continue
      }
    }

  }

}
