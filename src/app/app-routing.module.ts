import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaslGuard } from './msal.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'restricted',
    component: ProfileComponent,
    canActivate: [MaslGuard],
  },
  {
    path: 'public',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !isIframe ? 'enabled' : 'disabled', // Don't perform initial navigation in iframes
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
