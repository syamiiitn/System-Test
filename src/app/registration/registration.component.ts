import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regiForm:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.regiForm= this.fb.group({
      username:[''],
      email:[''],
      password:[''],
      mobi:['']
    })
  }

  signUp(){
    console.log(this.regiForm.value,'12312');
    this.regiForm.reset()
    
  }

}
