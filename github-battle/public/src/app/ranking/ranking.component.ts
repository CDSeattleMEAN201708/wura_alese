import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GitService } from '../git.service'

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  all_users = []

  constructor(private service: GitService, private router: Router) { }

  ngOnInit() {
    this.service.all_users()
      .then(data => {
        this.all_users = data
      })
      .catch(error => console.log(error))

  }

}
