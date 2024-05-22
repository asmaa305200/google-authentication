declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private _Router:Router){}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: "568474804871-tfu9l3oh6nbmnvhp6nigrdbcc8c6b5ur.apps.googleusercontent.com",
      callback: (resp: any) => {
        this.handleLogin(resp);
        console.log(resp);
         
       }
    })
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled-blue',
      size: 'large',
      shape: 'rectangle',
      width :290
  })
  }
  decodeToken(token :string) {
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleLogin(resp:any) {
   if (resp) {
     const payLoad = this.decodeToken(resp.credential);
     sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
     this._Router.navigate(['browse'])
   }
 }
}
