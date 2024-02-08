import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/class/admin';
import { FrozTeaTechService } from 'src/app/service/FrozTeaTech.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminloginComponent implements OnInit {
  
  admin: Admin = new Admin(0, "", "", "", "")
  admins: Admin = JSON.parse(sessionStorage.getItem("admin"))
  constructor(private FrozTeaTechservice: FrozTeaTechService, private route: Router, public activateRoute: ActivatedRoute) { }
  ngOnInit(): void {  
  }
  Getlogin(): void {

    this.FrozTeaTechservice.getadminlogin(this.admin).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("admin", JSON.stringify(data))

      this.route.navigateByUrl("/admin/home")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  onSubmit() {
    this.route.navigateByUrl("/admin/home");

  }
}
