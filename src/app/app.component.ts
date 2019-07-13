import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {

    const config = {
      apiKey: 'AIzaSyA2UPH5W1wvvp2qWMHlXQ_j1Dn_g6wa9pw',
      authDomain: 'findle-muanza-test.firebaseapp.com',
      databaseURL: 'https://findle-muanza-test.firebaseio.com',
      projectId: 'findle-muanza-test',
      storageBucket: 'findle-muanza-test.appspot.com',
      messagingSenderId: '248148685637',
      appId: '1:248148685637:web:19f0e02dde228829'
    };
    firebase.initializeApp(config);

  }



  ngOnInit() {


  }
}
