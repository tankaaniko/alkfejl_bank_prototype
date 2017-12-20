import { Component, OnInit , Input} from '@angular/core';
import { Client } from "../client";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  @Input() client: Client;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.client = new Client();
  }

  ngOnInit() {
  }

  async submit(form) {
    if (!form.valid) {
      return;
    }

    try {
      await this.authService.login(this.client);
      this.router.navigate(["/client/accounts"])

    }
    catch (e) {
      console.log(e);
    }
  }
}


