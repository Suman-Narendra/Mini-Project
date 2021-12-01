import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AllBlogsRoutingModule } from './all-blogs-routing.module';
import { AllBlogsComponent } from './all-blogs.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AllBlogsComponent
  ],
  imports: [
    CommonModule,
    AllBlogsRoutingModule
  ]
})
export class AllBlogsModule { }
