import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name : string;
phone : string;
add : string;
brandProfile: FirebaseObjectObservable<any>;
editMode : boolean = false;
  constructor(private afAuth: AngularFireAuth,db: AngularFireDatabase,public router : Router) { 
      this.brandProfile = db.object('/brands/'+this.afAuth.auth.currentUser.uid);
      this.phone = afAuth.auth.currentUser.phoneNumber;
      //this.brandProfile.subscribe(snap =>{
        // this.add = snap.child('address').val();
         //this.name = snap.child('brandName').val();
         //this.phone = snap.child('phoneNumber').val();
        // console.log(this.name);
         
  //    });
  }

  ngOnInit() {
  }

save(){
  console.log(this.name + this.phone + this.add);
  //console.log({'brandName':companyName,'phoneNumber':phoneNumber,'address':address});
  this.brandProfile.set({'brandName':this.name,'phoneNumber':this.phone,'address':this.add}).then(res =>{
    console.log('data updated');
    this.router.navigateByUrl('/members');
  });
}


  
}
