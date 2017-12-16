import { Component, OnInit , Input} from '@angular/core';
import { Client } from "../client";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Employee } from '../employee';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  
 
    constructor(
      private authService: AuthService,
      private router: Router
    ) {
      this.employee = new Employee();
    }
  
    ngOnInit() {
    }
  
    async submit(form) {
      if (!form.valid) {
        return;
      }
  
      try {
        await this.authService.loginEmployee(this.employee);
        this.router.navigate(["/transactions"])
  
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  
  
  

}
