import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})

export class UpdatecustomerComponent implements OnInit {

  customerForm = new FormGroup({
    'cust_name':new FormControl('',Validators.required),
    'cust_email':new FormControl('',Validators.required),
    'cust_phone':new FormControl('',Validators.required),
    'cust_addr':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnecustomer(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.customerForm.patchValue({
         
            cust_name:res.data[0].cust_name,
            cust_email:res.data[0].cust_email,
            cust_phone:res.data[0].cust_phone,
            cust_addr:res.data[0].cust_addr

        });
      });
  }
//to update a customer
customerUpdate()
{
  console.log(this.customerForm.value);
    this.service.updatecustomer(this.router.snapshot.params['id'], this.customerForm.value).subscribe((result:any)=>{

    this.customerForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
