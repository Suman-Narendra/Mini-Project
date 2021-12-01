import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogsComponent } from '../add-blogs/add-blogs.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

import { AllBlogsComponent } from './all-blogs.component';

const routes: Routes = [{ path: '', component: AllBlogsComponent },
{
  path:'blogs/:id',
  component:BlogDetailsComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBlogsRoutingModule { }
