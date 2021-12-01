import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { ErrorHandlingComponent } from './error-handling.component';


@NgModule({
  declarations: [
    ErrorHandlingComponent
  ],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ]
})
export class ErrorHandlingModule { }
