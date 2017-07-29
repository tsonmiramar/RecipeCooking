import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: {email: string, password: string};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(){
    this.authService.signUpUser(this.signupForm.value['email'], this.signupForm.value['password'])
    .then((response: Response)=>{
        console.log(response);
        alert('Sucessfully signup a user!');
        this.router.navigate(['/signin']);
    })
    .catch((error: any)=>{
      console.log(error.code);
      alert('Signup Failed!');
      if (error.code === 'auth/weak-password'){
        this.errorMessage.password = (<Error>error).message;
      }
      else {
        this.errorMessage.email = (<Error>error).message;
      }
    })
  }

  private buildForm(){
    this.errorMessage = { 'email': null, 'password': null};
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

}
