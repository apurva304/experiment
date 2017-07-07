import { Component ,OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(d => console.log(d));
  }
}
