import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBwt3cseh_SGeoHVtwDjjKW6NsWt-6zGoE",
      authDomain: "recipecooking-fce59.firebaseapp.com",
      databaseURL: "https://recipecooking-fce59.firebaseio.com",
      projectId: "recipecooking-fce59",
      storageBucket: "recipecooking-fce59.appspot.com",
      messagingSenderId: "993010404302"
    });
  }
}
