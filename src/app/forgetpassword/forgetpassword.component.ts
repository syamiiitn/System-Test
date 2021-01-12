import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  captchaForm:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.genCaptcha();
  }

  initForm(){
    this.captchaForm= this.fb.group({
      captcha1:[''],
      captcha2:['']
    })
  }

  genCaptcha(){
   let captcha1= Math.floor(Math.random() * 1000) + 1000;
   this.captchaForm.patchValue({
     captcha1:captcha1
   })
   console.log(captcha1)
  }

  sendCaptcha(){
    console.log(this.captchaForm.value,'12312');
    this.captchaForm.reset();
    this.genCaptcha();
    
  }

}
