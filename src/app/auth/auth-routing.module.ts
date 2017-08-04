import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninGuard } from '../_guard/signin.guard';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoute: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent, canActivate:[SigninGuard]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoute)
  ],
  providers: [SigninGuard],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule { }
