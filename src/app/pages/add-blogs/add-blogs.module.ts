import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogsRoutingModule } from './add-blogs-routing.module';
import { AddBlogsComponent } from './add-blogs.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBlogsComponent
  ],
  imports: [
    CommonModule,
    AddBlogsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddBlogsModule { }
