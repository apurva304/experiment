import { Component, OnInit ,Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;
  key : string;
  productOb: FirebaseListObservable<any[]>;
  constructor(@Inject(MD_DIALOG_DATA) public data: any,public db: AngularFireDatabase,private upSvc: UploadService) { }

  ngOnInit() {
  }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle(key : string) {
    if(this.selectedFiles.item(0) != null){
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload,key)
  }
}

  saveProduct(name:string,des:string){
    this.productOb = this.db.list('/products');
    this.productOb.push({
      'name' : name,
      'des' : des,
      'catid' : this.data.catid,
      'brandid' : this.data.brandid,
      'brandName' : this.data.brandinfo.brandName,
      'phoneNumber' : this.data.brandinfo.phoneNumber,
      'address' : this.data.brandinfo.address
    }).then((product)=>{
        this.uploadSingle(product.key);
    });
  }

  
}
