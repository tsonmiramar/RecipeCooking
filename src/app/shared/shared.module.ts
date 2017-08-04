import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive'; 
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DropdownDirective
  ],

  exports: [
    DropdownDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
