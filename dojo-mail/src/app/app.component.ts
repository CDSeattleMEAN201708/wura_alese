import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  dojo_mail: any[] = [
    {email: 'bill@gates.com', status: true, subject: 'New Windows', conent: 'Windows XI will launch in year 2100'},
    {email: 'ada@lovelace.com', status: true, subject: 'Programming', conent: 'ENchanctress of Numbers'},
    {email: 'john@carmac.com', status: false, subject: 'Updated Algo', conent: 'New algorithm for shadow volumes'},
    {email: 'gabe@newel.com', status: false, subject: 'HL3!', conent: 'Just Kidding'}
  ]
}
