import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/class/customer';
import { FrozTeaTechService } from 'src/app/service/FrozTeaTech.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerloginComponent implements OnInit {
  customer: Customer = new Customer(0, "", "", "", "","")
  username: string ;
  customerName: string;
  customerPhone: string;
  userpassword: string;
  customerId:number;
  email : string;
  customers: Customer = JSON.parse(sessionStorage.getItem("customer"))
  constructor(private resturantmanagmentservice: FrozTeaTechService, private route: Router, public activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }
  Getlogin(): void {

    this.resturantmanagmentservice.getlogin(this.customer).subscribe(data => {

      alert("Login Successfully"),

        console.log("Response Data"+ data)

      sessionStorage.setItem("customer", JSON.stringify(data))

      this.route.navigateByUrl("/customer/home")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.route.navigateByUrl("/customer/signup")
  }
  onSubmit() {
    this.route.navigateByUrl("/customer/home");

  }

}
