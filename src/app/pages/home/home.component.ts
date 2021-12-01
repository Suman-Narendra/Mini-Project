import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServService } from '../../services/blog-serv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogData: any = [];
  noImgPath:string ="../../assets/noImg.png";
  getBlog:any=[];

  finalBlog:any=[];


  blogdetails:any;





constructor(private blogservice:BlogServService,private router:Router) { }



  ngOnInit(): void {

    // const timer=setTimeout(() => {

      // this.blogdetails=this.blogservice.getIndex(5);

    // }, 2000);
    this.blogservice.getBlogData();
    console.log('data',JSON.parse(localStorage.getItem('blogData')?? ''));
    const localData = JSON.parse(localStorage.getItem('blogData')?? '');
    this.blogdetails = localData.splice(0, 5);

  
//   constructor(private blogServService: BlogServService,private router:Router) { }

//   ngOnInit(): void {

//     this.blogServService.fetchblog().subscribe(data => {
//       console.log("Data",data)
//       this.blogData = data;

//       /* Storing the data in local storage   */ 

// localStorage.setItem("blogdata",JSON.stringify(this.blogData));

// console.log(this.blogData);



// /*Accessing data*/ 

// this.getBlog=localStorage.getItem("blogdata");
// this.finalBlog=JSON.parse(this.getBlog);
// console.log(this.finalBlog);
//     },(error)=> {console.log("Error in subscribing block",error)})

//   }

this.blogData.sort((x:any,y:any)=>{
  const a=new Date(x.publishedAt)
  console.log(a)
 const b=new Date()
 return a===b?0:a>b?1:-1;
}) 
  }
  
  navDetail()
  {
    this.router.navigateByUrl('allblogs');
  }
}

