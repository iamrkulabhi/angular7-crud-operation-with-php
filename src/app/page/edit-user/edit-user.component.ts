import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser: User;

  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(75)]),
  });

  constructor(private userservice: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser(){
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.userservice.getUser(id).subscribe(res => {
      this.editUser = res[0];
      //console.log(this.editUser);
      this.editForm.setValue(this.editUser);
    });
  }

  onSubmit(){
    if(this.editForm.valid){
      //console.log(this.editForm.value);
      this.userservice.updateUser(this.editForm.value).subscribe(res => {
        //console.log(res);
        this.goBack();
      });
    }
  }

  goBack(){
    this.router.navigate(['/']);
  }
}
