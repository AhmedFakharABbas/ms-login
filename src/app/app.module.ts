import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import {
  MsalModule,
  MsalRedirectComponent,
  MsalService,
  MSAL_INSTANCE,
} from '@azure/msal-angular'; // Updated import
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '4685facc-ab36-4e48-bf9a-066a8697f7ba', // This is your client ID
      redirectUri: 'http://localhost:4200/restricted', // This is your redirect URI
    },
    // ,
    // cache: {
    //   cacheLocation: 'localStorage',
    //   storeAuthStateInCookie: false, // Set to true for Internet Explorer 11
    // },
  });
}

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MsalModule,
    NgbModule,
  ],
  providers: [
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
    MsalService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent], // MsalRedirectComponent bootstrapped here
})
export class AppModule {}
