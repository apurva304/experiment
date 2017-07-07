import { Component, OnInit,Input } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import{Product}from '../product';
import{ProductDialogComponent}from'../product-dialog/product-dialog.component';
import {MdDialog} from '@angular/material';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  prods: FirebaseListObservable<any[]>;
  db : AngularFireDatabase;
  @Input() catKey : string;
  brandid : any;
  brandOb : any;
  brandinfo : any;

  constructor(db: AngularFireDatabase,private afAuth: AngularFireAuth, public dialog: MdDialog,private upSvc: UploadService) {
    this.brandid = afAuth.auth.currentUser.uid;
    this.brandOb = db.object('/brands/' + this.brandid,{preserveSnapshot : true});
    this.brandOb.subscribe(snap => {
      this.brandinfo = snap.val()
    });
    this.prods = db.list('/products');
   }

  ngOnInit() {
    
  }
   openProductDialog(){
    this.dialog.open(ProductDialogComponent,{
      data :{
        'catid' : this.catKey,
        'brandinfo' : this.brandinfo,
        'brandid' : this.brandid
      }
    });
   }

   delete(key : string){
      this.prods.remove(key).then(()=>{
        this.upSvc.deleteFileStorage(key)
      });
   }
    
  }

