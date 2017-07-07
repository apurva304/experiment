import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import {Upload} from './upload';

@Injectable()
export class UploadService {

 constructor(private af: AngularFireModule, private db: AngularFireDatabase) { }

  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<any>;

  pushUpload(upload: Upload,key) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/`+key).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload,key)
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload,key : string) {
    this.db.object('products/'+key+'/imageUrl').set(upload.url);
  }

   
 
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  public deleteFileStorage(key:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/`+key).delete()
  }

}
