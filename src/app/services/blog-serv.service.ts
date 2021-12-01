import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServService {
  blogarr: any;
  blogArr: any;
  formvalue: any;
  refresh: any;
  value = -1;
  id: any;


  /* 
  * To do
  */
  constructor(private http: HttpClient) {
    
  }

  fetchblog(): Observable<any> {
    return this.http.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2");
  }

  getBlogData(){
    const localBlog = localStorage.getItem('blogData');
    if (localBlog === null || localBlog === undefined) {
      this.fetchblog().subscribe(resp => {
        if (resp) {
          localStorage.setItem('blogData', JSON.stringify(resp.articles));
        }
      })
    }
  }

  getblogs() {
    this.blogArr = JSON.parse(localStorage.getItem("blogs") || "[]")
  }

  // getData() {
  //   this.fetchblog().subscribe(data => {
  //     this.blogarr = data.articles;
  //     localStorage.setItem("blogs", JSON.stringify(this.blogarr));
  //     this.blogArr = JSON.parse(localStorage.getItem("blogs") || "[]")
  //   })
  // }

  

  // getIndex(index: number): any {
  //   console.log(index)
  //   const blogs: any = JSON.parse(localStorage.getItem("blogs") || "[]")
  //   console.log(blogs)
  //   return this.blogArr.slice(0, index);
  // }

  // extractIndex(index: any) {
  //   return this.blogArr[index];
  // }

  // getAllBlogs() {
  //   console.log("service", this.blogArr)
  //   return this.blogArr;
  // }

}
