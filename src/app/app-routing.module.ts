import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { WalletComponent } from './wallet/wallet.component';
import {KycApprovalComponent} from './kyc-approval/kyc-approval.component';
import {FeesComponent} from './fees/fees.component';
import {RegisteredUserComponent} from './registered-user/registered-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo:'/login'},
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignUpComponent },
  { path:'dashboard/kyc_approval_list', component: KycApprovalComponent },
  { path:'charges_fees', component: FeesComponent },
  { path:'registeredUser', component:RegisteredUserComponent},
  { path:'wallet', component: WalletComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
