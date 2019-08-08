import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import {UserserviceService} from '../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserserviceService,
              private router: Router) { }

  ngOnInit() {
  }
  saveUser(Usform : NgForm ){
    console.log(Usform.value);
    this.router.navigate(['/dashboard/kyc_approval_list']);
    // this.service.signUp()
  }
}
