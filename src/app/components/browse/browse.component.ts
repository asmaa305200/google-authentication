import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  constructor(private _AuthService: AuthService) { }

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  signOut() {
    sessionStorage.removeItem('loggedInUser')
    this._AuthService.signOut()
  }
}
