import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
              private router: Router ){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAuthenticated()){
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

  canActivateChild(){
    return this.canActivate();
  }
}
