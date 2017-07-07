import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {MdDialog} from '@angular/material';
import{CatDialogComponent}from '../cat-dialog/cat-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 items: FirebaseListObservable<any[]>;
 key : string;
 name : string;
  constructor(db: AngularFireDatabase, public dialog: MdDialog) { 
    this.items = db.list('/cat');
  }

  ngOnInit() {
  }

  click(id : string,name:string){
    this.key = id;
    this.name = name;
  }
  
  openCatDialog(){
    this.dialog.open(CatDialogComponent);
  }
 
}
