import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';

import {AuthMethods, AuthProviders, FirebaseUIAuthConfig, FirebaseUIModule} from 'firebaseui-angular';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import{AuthGuard}from './auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule,MdButtonModule,MdSidenavModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { NotificationComponent } from './notification/notification.component';
import { UsersComponent } from './users/users.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule }from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DetailComponent } from './detail/detail.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { CatDialogComponent } from './cat-dialog/cat-dialog.component';
import {UploadService} from './upload.service';


const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProviders.Phone
  ],
  method: AuthMethods.Popup,
  tos: 'members'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent,
    ProfileComponent,
    ProductComponent,
    NotificationComponent,
    UsersComponent,
    DetailComponent,
    ProductDialogComponent,
    CatDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  entryComponents:[ProductDialogComponent,CatDialogComponent],
  providers: [AuthGuard,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
