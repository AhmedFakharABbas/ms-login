import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Model/User';
import { LoginResponse } from 'src/Model/logiResponse';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //form
  model: any = {};
  countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
  ];
  countryList = [
    { name: 'Pakistan', value: 'Pakistan' },
    { name: 'India', value: 'India' },
    { name: 'Afghanistan', value: 'Afghanistan' },
    { name: 'Bulgaria', value: 'Bulgaria' },
    { name: 'Kenya', value: 'Kenya' },
    { name: 'Argentina', value: 'Argentina' },
    { name: 'Algeria', value: 'Algeria' },
    { name: 'Andorra', value: 'Andorra' },
    { name: 'Angola', value: 'Angola' },
    { name: 'Anguilla', value: 'Anguilla' },
    { name: 'Antarctica', value: 'Antarctica' },
    { name: 'Barbuda', value: 'Barbuda' },
    { name: 'Pakistan', value: 'Pakistan' },
    { name: 'Antigua', value: 'Antigua' },
    { name: 'Afghanistan', value: 'Afghanistan' },
    { name: 'Bulgaria', value: 'Bulgaria' },
    { name: 'Kenya', value: 'Kenya' },
    { name: 'Argentina', value: 'Argentina' },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private msalService: MsalService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
    // this.service.signin(this.model).subscribe(
    //   (res) => {
    //     console.log(res);
    //   }
    //   //   {
    //   //   next: (response: any) => {
    //   //     localStorage.setItem('accesstoken', response.access_token);
    //   //     localStorage.setItem('name', response.userName);
    //   //     localStorage.setItem('RoleId', response.roleid);
    //   //     console.log(response);
    //   //     this.toastr.success('Login successfully');
    //   //     this.router.navigate(['/admin/list']);
    //   //   },
    //   //   error: (error) => {
    //   //     this.toastr.error(error.error.error_description);
    //   //   },
    //   // }
    // );
  }
  msClick() {
    this.msalService.loginPopup().subscribe((res: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(res.account);
      if (res.account != null) {
        this.router.navigate(['/restricted']);
      }
      console.log(res);
    });
    // this.msalService.loginRedirect();
  }
}
