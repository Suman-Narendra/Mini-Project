import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogServService } from 'src/app/services/blog-serv.service';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {
  myid:any;
  a:any;
  formobj:any;
  formValue:any;

  constructor(private blogs1:BlogServService, private active:ActivatedRoute){
    this.active.queryParams.subscribe((params:any)=>{
      if(params) {
       this.myid=params.indexValue
      }
    })
    // this.formValue=blogs1.formvalue
  }
  addblogs:any;
  ngOnInit() {
    const localData = JSON.parse(localStorage.getItem('blogData')?? '');
    const formValue=localData[this.myid];
    console.log(formValue)

    this.addblogs = new FormGroup({
    'title' : new FormControl(formValue?formValue.title:'', [Validators.required, Validators.maxLength(70)]),
    'author' : new FormControl(formValue?formValue.author:'', Validators.required),
    'content' : new FormControl(formValue?formValue.content:'', Validators.required),
    'description' : new FormControl(formValue?formValue.description:'',[Validators.required, Validators.maxLength(250)]),
    'urlToImage':new FormControl(formValue?formValue.urlToImage:'',Validators.required),
    'publishedAt' : new FormControl(formValue?formValue.publishedAt:'',Validators.required),
  });

  }

  

onsubmit(){
  const data=this.addblogs
  this.formobj={
  title:data.value.title,
  author:data.value.author,
  content:data.value.content,
  description:data.value.description,
  urlToImage:data.value.urlToImage,
  publishedAt:new Date().toISOString()
  }
  const blogs:any=JSON.parse(localStorage.getItem("blogData")|| "[]");
  if(this.myid!='' && this.myid!=undefined && this.myid!=null){
    blogs[this.myid]=this.formobj;
    
  } else{
    blogs.push(this.formobj)
  }
 
  localStorage.setItem("blogData",JSON.stringify(blogs))
  this.addblogs.reset();
  if(this.formobj){
    alert('Blog Created Successfully');
  }
  this.blogs1.getblogs();

 
}

clicksub() {
  console.log(this.addblogs.value);
  this.addblogs.reset();
}

  get title() {
    return this.addblogs.get('title');
  }
  get author() {
    return this.addblogs.get('author');
  }
  get content() {
    return this.addblogs.get('content');
  }
  get urlToImage() {
    return this.addblogs.get('urlToImage');
  }

  get description() {
    return this.addblogs.get('description');
  }

  get publishedAt() {
    return this.addblogs.get('publishedAt');
  }
  

  }







