import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: string;
  password: string;
  confirm_pass: string;
  userData: User = {
    name: "",
    password: "",
  };
  constructor(private userService: UserService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  register() {
    if (this.password != this.confirm_pass) {
      alert("Passwords does not match");
    }
    else if (window.localStorage.getItem(this.user) != undefined) {
      alert("Username already exists");
    }
    else {
      this.userData.name = this.user;
      this.userData.password = this.password;
      this.userService.setUser(this.userData);
      window.localStorage.setItem("loggedInUser", this.user);
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }

}
