import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GitService } from '../git.service'
import { Git } from '../git'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  git_user_1: string
  git_user_2: string
  user: any
  error: any
  form1: any
  form2: any
  button: any
  main: any
  battle: any
  winner: any
  loser: any
  constructor(private service: GitService, private router: Router) { }

  ngOnInit() {
    this.user  = [
      {name: '', image: '', status: false, score: 0},
      {name: '', image: '', status: false, score: 0}
    ]
    this.error = [
      {message: '', status: false},
      {message: '', status: false}
    ]
    this.form1 = {status: true}
    this.form2 = {status: true}
    this.button = false
    this.main = true
    this.battle = false
    this.winner = {name: '', image: '', status: false, score: 0}
    this.loser = {name: '', image: '', status: false, score: 0}
  }
  on_click_1() {
    this.service.retrieve_git(this.git_user_1)
    .then( data => {
      if(data){
        this.user[0].name = data.login
        this.user[0].image = data.avatar_url
        this.user[0].status = true
        this.form1.status = false
        this.error[0].status = false
        this.user[0].score = (data.public_repos + data.followers) * 12

        this.service.create_user(this.user[0])
          .then(data => {console.log(data)})
          .catch(error => console.log(error))

        if (this.user[0].status == true  && this.user[1].status == true) {
        this.button = true
        }
      }
      this.git_user_1 = ''
    })
    .catch( errors => {
      if(errors) {
        this.error[0].status = true
        this.error[0].message = 'Username doesnt exist'
      }
      console.log(errors)
    })
  }

  on_click_2() {
    this.service.retrieve_git(this.git_user_2)
    .then( data => {
      if(data){
        this.user[1].name = data.login
        this.user[1].image = data.avatar_url
        this.user[1].status = true
        this.form2.status = false
        this.error[1].status = false
        this.user[1].score = (data.public_repos + data.followers) * 12

        this.service.create_user(this.user[1])
          .then(data => {console.log(data)})
          .catch(error => console.log(error))

        if (this.user[0].status == true  && this.user[1].status == true) {
        this.button = true
        }
        this.git_user_2 = ''
      }
    })
    .catch( errors => {
      if(errors) {
        this.error[1].status = true
        this.error[1].message = 'Username doesnt exist'
      }
      console.log(errors)
    })
  }

  git_battle() {
    this.main = false
    this.button = false
    this.battle = true

    if(this.user[0].score > this.user[1].score) {
      this.winner = this.user[0]
      this.loser = this.user[1]
    } else {
      this.winner = this.user[1]
      this.loser = this.user[0]
    }
  }
  go_home() {
    this.main = true
    this.button = false
    this.battle = false
    this.form1.status = true
    this.form2.status = true
    this.user  = [
      {name: '', image: '', status: false, score: 0},
      {name: '', image: '', status: false, score: 0}
    ]
    this.error = [
      {message: '', status: false},
      {message: '', status: false}
    ]
    this.winner = {name: '', image: '', status: false, score: 0}
    this.loser = {name: '', image: '', status: false, score: 0}
    this.router.navigate(['/battle'])
  }

}
