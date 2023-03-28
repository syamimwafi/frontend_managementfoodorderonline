import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})

export class UpdateproductComponent implements OnInit {

  productForm = new FormGroup({
    'food_name':new FormControl('',Validators.required),
    'food_price':new FormControl('',Validators.required),
    'food_img':new FormControl('',Validators.required),
    'cust_addr':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneproduct(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.productForm.patchValue({
         
            food_name:res.data[0].food_name,
            food_price:res.data[0].food_price,
            food_img:res.data[0].food_img,
            

        });
      });
  }
//to update a product
productUpdate()
{
  console.log(this.productForm.value);
    this.service.updateproduct(this.router.snapshot.params['id'], this.productForm.value).subscribe((result:any)=>{

    this.productForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
