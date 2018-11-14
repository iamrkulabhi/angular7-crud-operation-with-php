import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(75)]),
  });

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.addForm.valid){
      //console.log(this.addForm.value);
      this.userservice.addUser(this.addForm.value).subscribe(res => {
        console.log(res);
        this.goBack();
      });
    }
  }

  goBack(){
    this.router.navigate(['/']);
  }
}
