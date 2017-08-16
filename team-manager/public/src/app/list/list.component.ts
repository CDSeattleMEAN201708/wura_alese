import { Component, OnInit } from '@angular/core';
import { Player } from '../player'
import { GameService } from '../game.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  all_players: any = []
  constructor(private service: GameService, private router: Router) { }

  ngOnInit() {
    this.service.retrieve_players()
    .then(data => this.all_players = data)
    .catch(errors => console.log(errors, '*(*(*(**)))'))
  }
  delete(id) {

    this.service.delete_player(id)
    .then(() => {
      this.service.retrieve_players()
      .then(data => this.all_players = data)
      .catch(errors => console.log(errors, '*(*(*(**)))'))
      // this.router.navigate(['/players', 'list'])
    })
    .catch(errors => console.log(errors, '*********'))


  }

}
