import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo="../../assets/idp-logo.svg";
 
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  homeFun()
  {
    this.router.navigateByUrl('home')
  }
  allBlogs()
  {
    this.router.navigateByUrl('allBlogs')
  }
  addBlogs()
  {
    this.router.navigateByUrl('addBlogs')
  }
  
}
