import { Component, OnInit } from '@angular/core';
import { Client } from "../client";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Client = new Client();

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  submit(form){
    if(!form.valid){
      console.log("Hiba a bejelentkezésnél.");
      return;
    }

    this.authService.login(this.model);
    if(this.authService.isLogged()){
      console.log("Sikeres bejelentkezés.");
      this.router.navigate(["https://localhost:4200/transactions"])
    }

  }
}
