import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from '../all-blogs/all-blogs.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },

{
path:'blogs/:id',
component:BlogDetailsComponent
},
{
  path:'allblogs',
  component:AllBlogsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
