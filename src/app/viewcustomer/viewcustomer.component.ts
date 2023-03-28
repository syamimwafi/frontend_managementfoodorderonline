import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllcustomer();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deletecustomer(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete customer profile successful!";
      this.getAllcustomer();

    });

  }

  //get customer
  getAllcustomer(){

    this.service.getAllcustomer().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}