import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import{AngularFireDatabase} from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   error: any;
    constructor(public af: AngularFireAuth,private router: Router , db : AngularFireDatabase) {

      this.af.authState.subscribe(auth => { 
      if(auth) {
        db.object('/brands/' + this.af.auth.currentUser.uid, { preserveSnapshot: true }).subscribe(snap =>{
          if(snap.val() == null || snap.val() === null){
            this.router.navigateByUrl('/createProfile');
          }else{
            this.router.navigateByUrl('/members');
          }
        });
      }
    });
  }

  ngOnInit() {
  }

  
}
