import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../client";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //model: Client = new Client();

  @Input() client: Client;

  constructor(
    private authService : AuthService,
    private router : Router
  ) { 
    this.client = new Client();
  }

  ngOnInit() {
  }

  async submit(form){
    if(!form.valid){
      //console.log("Hiba a bejelentkezésnél.");
      return;
    }

    try {
      await this.authService.login(this.client);
      this.router.navigate(["/transactions"])
      /*if(this.authService.isLogged()){
        console.log("Sikeres bejelentkezés.");
        this.router.navigate(["/transactions"])

      }*/
    }
    catch(e) {
      console.log(e);
    }
  }
}
