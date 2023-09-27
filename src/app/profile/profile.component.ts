import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private msal: MsalService) {}

  ngOnInit(): void {}
  getName(): string {
    return this.msal.instance.getActiveAccount().name;
  }
}
