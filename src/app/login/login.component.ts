import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.loginForm= this.fb.group({
      email:[''],
      password:['']
    })
  }

  signIn(){
    console.log(this.loginForm.value,'12312');
    this.loginForm.reset()
    
  }

}
