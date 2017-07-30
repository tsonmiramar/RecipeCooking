import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: {'email': string, 'password': string} = { 'email': null, 'password': null };
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(){
    this.authService.signInUser(this.signinForm.value['email'], this.signinForm.value['password'])
      .catch((error: any)=>{
        alert('Sigin Failed!');
        if ( error.code === 'auth/wrong-password'){
          this.errorMessage.password = (<Error>error).message;
        }
        else{
          this.errorMessage.email = (<Error>error).message;
        }
      })
  }

  private buildForm(){
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

}
