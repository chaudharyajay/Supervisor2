import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router'; 
import { timer } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userData: any; 
  userForm: FormGroup;
  signUpData;
  success:boolean = false;

  constructor(private service: UserserviceService,
             private router :Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      fullName: new FormControl('', 
                                [
                                  Validators.required,
                                  Validators.pattern('[a-zA-Z ]+')
                                ]),
      uid: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    
    });

    // this.dummy();
  }

  userSignUp(userData : FormGroup){
    this.signUpData = userData.value;
    console.log(this.signUpData);

    this.service.signUp(this.signUpData)
    .subscribe(
      data => {
      if(data) {
        // console.log(data);        
        this.userData = data;
        localStorage.setItem('access token', JSON.stringify(this.userData['auth']));
        this.success = true;
        const source = timer(4000);
        const subscribe = source.subscribe(val => 
        this.router.navigate(['/login'])
        );
      } else {
      }
      }
    )

    // this.resetForm(userData);
  }


  // dummy() {
  //   let data={"name": "morpheus", "job": "leader"}
  //   this.service.dummy(data)
  //   .subscribe( 
  //     data => {
  //       console.log(data['name']);
  //     }
  //   )
  // }

  resetForm(userData) {
    userData.reset();
  }
}
