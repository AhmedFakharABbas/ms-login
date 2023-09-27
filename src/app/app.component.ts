import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ms-login';
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this.msalService.instance.setActiveAccount(res.account);
      }
    });
  }
  constructor(private msalService: MsalService) {}
  login() {
    this.msalService.loginRedirect();
    // this.msalService.loginPopup().subscribe((res: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(res.account);
    //   console.log(res);
    // });
  }
  logOut() {
    this.msalService.logout();
  }
  isLogedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }
}
