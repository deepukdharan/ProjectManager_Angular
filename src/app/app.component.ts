import { Component, OnInit } from '@angular/core';
import{Product} from './Models/product';
import {ProductServiceService} from './shared/product-service.service';
import { userdetails } from './Models/userdetails';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductServiceService]  
})
export class AppComponent {
  title = 'CapStone Project Manager';
  svc:ProductServiceService;
  userdata:userdetails[];
  prod:Product[];
  p:Product;
  ud:userdetails=new userdetails();

  constructor()
  {
      this.svc = new ProductServiceService();
      
  }
  ngOnInit()
  {
 
  }
}
