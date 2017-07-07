import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-cat-dialog',
  templateUrl: './cat-dialog.component.html',
  styleUrls: ['./cat-dialog.component.css']
})
export class CatDialogComponent implements OnInit {
  cats: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }
  saveCategory(name:string,des :string){
    this.cats = this.db.list('/cat');
    this.cats.push({
      'name' : name,
      'des' : des
    });
  }
}
