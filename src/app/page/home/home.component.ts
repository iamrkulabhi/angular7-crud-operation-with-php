import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allusers: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allUsers();
  }

  allUsers(){
    this.userService.getUsers().subscribe(res => {
      this.allusers = res;
      // console.log(this.allusers);
    });
  }

  deleteUser(id){
    //console.log(id);
    this.userService.deleteUser(id).subscribe(res => {
      console.log(res);
      this.allUsers();
    });
  }
}
