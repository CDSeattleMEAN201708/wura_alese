import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import { Player } from './player'

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  create(player: Player) {
    return this.http.post('/create_player', player)
    .map(data => data.json())
    .toPromise()
  }
  retrieve_players(){
    return this.http.get('/all_players')
    .map(data => data.json())
    .toPromise()
  }
  delete_player(id) {
    console.log(id)
    return this.http.get(`/delete/${id}`, id)
    .map(data => data.json())
    .toPromise()
  }

}
