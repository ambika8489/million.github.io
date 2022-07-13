import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'living-colors';
  constructor(public router: Router,) { }

  neurology(){
    this.router.navigate(["/neurology"]);
  }
  // homee:boolean = true
  home(){
    // this.homee = false;
    this.router.navigate(["/home"]);
  }
  product(){
    this.router.navigate(["/products"]);
  }
  contact(){
    this.router.navigate(["/contact"]);
  }
  aboutus(){
    this.router.navigate(["/aboutus"]);
    // menuToggle
    // document.getElementById('menuToggle').display = hidden;
    // var x = document.getElementById("menuToggle");
    // console.log(x.style.display)
    // if (x.style.display === "none" || x.style.display === "") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }

  }
  public isCollapsed = true;
}
