import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/class/admin';
import { FrozTeaTechService } from 'src/app/service/FrozTeaTech.service';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.css']
})
export class PaymentViewComponent {
payment:any;
hasSearchId: boolean;
searchId: number;
p: number = 1;
count: number = 5;
  admin: Admin;
constructor(private FrozTeaTechService:FrozTeaTechService,public router:Router, private activeRoute:ActivatedRoute) { }
  ngOnInit(): void 
      {
        this.activeRoute.paramMap.subscribe(()=>this.admin=JSON.parse(sessionStorage.getItem("admin")))
        this.activeRoute.paramMap.subscribe(()=>this.getAllPayments());
        this.checkSessionAndNavigate();
      }
      getAllPayments()
    {
      this.hasSearchId = this.activeRoute.snapshot.paramMap.has("orderId");
         if(this.hasSearchId)
         {this.searchId  = Number(this.activeRoute.snapshot.paramMap.get("orderId"));
          console.log(this.searchId)
          this.FrozTeaTechService.getpaymentbyid(this.searchId).subscribe(data=>{
          console.log(data);
          this.payment= data;
          })
        }
        else{
        this.FrozTeaTechService.getAllPayments().subscribe(data=>{
          console.log(data);
          this.payment=data;
        });
      }
    }
    deleteOrder(id:number):void{
      console.log(id);
      if(confirm("Do you want to delete ?")){
        this.FrozTeaTechService.deletePayment(id).subscribe(data=>{
          console.log(data);
          this.getAllPayments();
        })
      };
    }
    logout() {
      if (sessionStorage.getItem("admin")) {
        sessionStorage.clear()
        localStorage.clear()
        alert("Logout Successfully")
        this.router.navigateByUrl("/admin/login")
      }
      else {
        alert("No user loged in")
      }
    }
    checkSessionAndNavigate() {
      if (!this.admin) {
        this.router.navigateByUrl("/admin/login");
      }
    }
}
