import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  passwordChangeForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirm_password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })

  loginUser(){
    console.log(this.passwordChangeForm.value);
  }

  get email(){
    return this.passwordChangeForm.get('email');
  }

  get password(){
    return this.passwordChangeForm.get('password');
  }

  get confirm_password(){
    return this.passwordChangeForm.get('confirm_password');
  }

  visible:boolean = true;
  visible2:boolean = true;
  changetype:boolean = true;
  changetype2:boolean = true;

  //password eye slash
  viewpass(){
    this.visible =! this.visible;
    this.changetype =! this.changetype;
  }

  viewpass2(){
    this.visible2 =! this.visible2;
    this.changetype2 =! this.changetype2;
  }



  // password checker
  passwordChecker(){
    let p = 0;
    if (this.passwordChangeForm.get('password')?.value === ''){
      return -1;
    }

    if (/[0-9]/.test(this.passwordChangeForm.get('password')?.value || '')){
      p++;
    }

    if (/[a-z]/.test(this.passwordChangeForm.get('password')?.value || '')){
      p++;
    }

    if (/[A-Z]/.test(this.passwordChangeForm.get('password')?.value || '')){
      p++;
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.passwordChangeForm.get('password')?.value || '')){
      p++;
    }

    if (this.passwordChangeForm.get('password')?.value?.length || 0 > 8){
      p++;
    }
    return p;
  }

}
