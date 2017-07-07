import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   notificationListRef: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.notificationListRef = db.list('/notification');
   }

  ngOnInit() {
  }
  notify(title : string,message :string){
    this.notificationListRef.push({'title' : title,'message':message});
  }
}
