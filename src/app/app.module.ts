import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {HttpClientModule} from '@angular/common/http';
import { UserserviceService } from './services/userservice.service';

import { SidebarComponent } from './sidebar/sidebar.component';

import { WalletComponent } from './wallet/wallet.component';
import { KycApprovalComponent } from './kyc-approval/kyc-approval.component';
import { FeesComponent } from './fees/fees.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { InternalService} from './services/internal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
   
    SidebarComponent,
   
    WalletComponent,
    KycApprovalComponent,
    FeesComponent,
    RegisteredUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],

  providers: [UserserviceService,InternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
