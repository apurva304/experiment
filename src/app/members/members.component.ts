import {Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router}from '@angular/router';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database';
import {CatDialogComponent}from '../cat-dialog/cat-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
brand : FirebaseObjectObservable<any>;
  constructor(private afAuth: AngularFireAuth,private router: Router,db : AngularFireDatabase) { 
    this.brand = db.object('/brands' +'/' + this.afAuth.auth.currentUser.uid, { preserveSnapshot: true });
    this.brand.subscribe(snap=>{
      if(snap.val() === null || snap.val() == null){
        this.router.navigateByUrl('/createProfile');
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
