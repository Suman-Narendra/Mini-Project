import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServService } from 'src/app/services/blog-serv.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  id:any;

blogs:any;




  constructor(private active:ActivatedRoute,private blogservice:BlogServService, private router:Router) {
    this.active.params.subscribe((param:any) =>{
      console.log(param)
      this.id=param.id
    })
   }



  ngOnInit(): void {
    // this.blogs=this.blogservice.extractIndex(this.id)
  
    localStorage.getItem("blogData")
    console.log('data',JSON.parse(localStorage.getItem('blogData')?? ''));
    const localData = JSON.parse(localStorage.getItem('blogData')?? '');
    this.blogs=localData[this.id]
    console.log(this.blogs)
  }

  updateBlog(b:any){
   
    console.log(b)
    this.router.navigate(['addblogs'],{queryParams:{indexValue:this.id}})
    
  }
}
