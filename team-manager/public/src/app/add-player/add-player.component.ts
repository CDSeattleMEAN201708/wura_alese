import { Component, OnInit } from '@angular/core';
import { Player } from '../player'
import { GameService } from '../game.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player = new Player

  constructor(private service: GameService, private router: Router) { }

  ngOnInit() {

  }
  create_player() {
    this.service.create(this.player)
    .then(() => {
      this.router.navigate(['/players', 'list'])
    })
    .catch(errors => console.log(errors, '*********'))
    this.player = new Player
  }

}
