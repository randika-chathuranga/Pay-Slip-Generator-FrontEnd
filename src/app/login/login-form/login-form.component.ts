import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Owner } from 'src/app/owner';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  //created new object related to owner
  owner: Owner = new Owner;

  constructor(private authservice: AuthService, public router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  visible:boolean = true;
  changetype:boolean = true;

  viewpass(){
    this.visible =! this.visible;
    this.changetype =! this.changetype;
  }


  //login function
  loginUser(){
    this.authservice.authenticate(this.owner).pipe(tap((userData:Owner) => {
        localStorage.setItem("email", userData.email);
        localStorage.setItem("role", userData.roles[0]);
        console.log(userData.roles);
        let tokenStr = "Bearer " + userData.accessToken;
        localStorage.setItem("token", tokenStr)
      })).subscribe(data=>{
      // if(data.roles[0] == "OWNER"){
      //   this.router.navigate(['/owner-dashboard'])
      // }else if(data.roles[0] == "ADMIN"){
      //   this.router.navigate(['/hr-dashboard'])
      // }else if(data.roles[0] == "EMPLOYEE"){
      //   this.router.navigate(['/employee-dashboard'])
      // }

      this.router.navigate(['/dashboard'])
    }, error=>console.log(error))
  }


  //fetching email and password for login inputs
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }


}
