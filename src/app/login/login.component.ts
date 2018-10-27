import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model/user.model';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: User;
  username: string;
  password: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    let userFromDB = window.localStorage.getItem(this.username);
    if (userFromDB != undefined) {
      userFromDB = JSON.parse(userFromDB);
      if (userFromDB['password'] == this.password) {
        
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
      else {
        alert("Username / Password is incorrect");
      }
    }
  }

}
