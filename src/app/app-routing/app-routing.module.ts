import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/signin', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 

}
