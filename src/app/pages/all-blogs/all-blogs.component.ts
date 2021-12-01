import { Component, OnInit } from '@angular/core';
import { BlogServService } from '../../services/blog-serv.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  blogData: any ;
data:any=[];
  blog:any;
  myid:any;

  
  noImgPath:string ="../../assets/noImg.png";

  constructor(
    private blogServService: BlogServService,
    private router:Router,
    private active:ActivatedRoute) { 
    
    }

  ngOnInit(): void {
    
    console.log('data',JSON.parse(localStorage.getItem('blogData')?? ''));
    const localData = JSON.parse(localStorage.getItem('blogData')?? '');
    if (localData !== null || localData !==  undefined || localData !== ''){
      this.blogData= localData;
     console.log(this.blogData)
     
      // this.blogData.sort((x:any)=>{
      //   const a=new Date(x.publishedAt)
      //   console.log(a)
      //  const b=new Date()
      //  return a===b?0:a>b?1:-1;
      // })
    }
    

              /*this.blogservice.getAllBlogs();*/
      
      

    // },(error)=> {console.log("Error in subscribing block",error)})
  }

  deleteBlog(index:any)
  {
    this.blogData.splice(index, 1);
    console.log(this.blogData);
    localStorage.setItem("blogData", JSON.stringify(this.blogData));
  }

  
}
