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
  homee:boolean = true
  home(){
    this.homee = false;
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

  }
  public isCollapsed = true;
}
