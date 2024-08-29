import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Owner } from 'src/app/owner';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  @ViewChild('aForm') aForm!: ElementRef;

  resetPasswordInterfaceHeading: string = "Please enter new password";
  otpCodeInterfaceHeading: string = "Please enter your verification code";
  heading:string = "";



  forgotPasswordEmail:string | undefined;
  otpValue: string | undefined;
  newPassword: string | undefined;
  confirmNewPassword: string | undefined;

  text1:string="";
  text2:string="";
  text3:string="";
  text4:string="";
  text5:string="";

  constructor(private authservice: AuthService, public router: Router) { }

  //created new object related to owner
  owner: Owner = new Owner;

  ngOnInit(): void {
  }

  passwordChangeForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirm_password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })

  visible:boolean = true;
  changetype:boolean = true;
  visible2:boolean = true;
  changetype2:boolean = true;

  viewpass():void{
    this.visible =! this.visible;
    this.changetype =! this.changetype;
  }

  viewpass2(){
    this.visible2 =! this.visible2;
    this.changetype2 =! this.changetype2;
  }

  loginUser(){}

  //forgot password function
  // addemail(){
  //   this.authservice.forgotPassword(this.owner).subscribe(data=>{
  //     alert("email sent")
  //   }, error=>alert("enter valid email"))
  // }

  get email(){
    return this.passwordChangeForm.get('email');
  }

  get password(){
    return this.passwordChangeForm.get('password');
  }

  get confirm_password(){
    return this.passwordChangeForm.get('confirm_password');
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

  isForgotpasswordLink: boolean = true;
  verifyNumber: boolean =false;
  isEnterNewPassword: boolean = false;



  isVerifiedEmail(){
    const data = {
      email: this.forgotPasswordEmail
    }
    this.authservice.forgotPassword(data).subscribe(data=>{
      if(data.requestValid){
        this.isForgotpasswordLink=false;
        this.verifyNumber=true;

      }else{
        alert("enter valid email")
      }

    });
  }

  onSubmit(event: any) {
    this.otpValue = this.text1 + this.text2 + this.text3 + this.text4 + this.text5;
    console.log(this.otpValue);
    this.isOtpVerified();
 }


  isOtpVerified(){
    const data = {
      email: this.forgotPasswordEmail,
      oneTimePasswordCode: this.otpValue,
    }

    this.authservice.otpVerification(data).subscribe(data =>{
      if(data.isValid){
        this.isEnterNewPassword = true;
        this.isForgotpasswordLink = false;
        this.verifyNumber = false;
      }else{
        alert("otp is wrong")
      }
    })
  }

  changePassword(){
    const data = {
      email: this.forgotPasswordEmail,
      password: this.confirmNewPassword
    }

    this.authservice.resetPassword(data).subscribe((data)=>{
      if(data.message="Your Password Updated Successfully"){
        setTimeout(()=>{
          this.router.navigate(['/login'])
        },4)
      }else{
        alert("try again");
      }
    })
  }


//autofocus text boxes for otp
move(event: any, focus: any): any{
  console.log(event.target.value);
  if (event.target.value.length === 1){
    const ele = this.aForm.nativeElement[focus];
    console.log(ele);
    console.log(this.aForm);
    if (ele) {
      ele.focus();
    }
  }
}
}
