import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorHandlingComponent } from './error-handling.component';

const routes: Routes = [{ path: '', component: ErrorHandlingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlingRoutingModule { }
