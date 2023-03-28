import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllproduct();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteproduct(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete product profile successful!";
      this.getAllproduct();

    });

  }

  //get product
  getAllproduct(){

    this.service.getAllproduct().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}