import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router,) { }


  ngOnInit(): void {
  }

  neurology(){
    this.router.navigate(["/neurology"]);
  }
  general(){
    this.router.navigate(["/general"]);
  }

}
