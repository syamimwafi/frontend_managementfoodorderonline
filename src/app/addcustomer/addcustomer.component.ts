import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnecustomer(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.customerForm.patchValue({
        
        cust_name:res.data[0].cust_name,
        cust_email:res.data[0].cust_email,
        cust_phone:res.data[0].cust_phone,
        cust_addr:res.data[0].cust_addr,

      });
    });
  }
  }

  customerForm = new FormGroup({
    
    'cust_name':new FormControl('',Validators.required),
    'cust_email':new FormControl('',Validators.required),
    'cust_phone':new FormControl('',Validators.required),
    'cust_addr':new FormControl('',Validators.required)


  });

  //to create a new customer
  customerSubmit(){
    if(this.customerForm.valid){
      console.log(this.customerForm.value);
      this.service.createcustomer( this.customerForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.customerForm.reset();
        this.successmsg = 'Add customer Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add customer Profile Unsuccessful';
    }

  }
//to update a customer
customerUpdate()
{
  console.log(this.customerForm.value,'updatedform');

  if(this.customerForm.valid)
  {
    this.service.updatecustomer(this.customerForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}
