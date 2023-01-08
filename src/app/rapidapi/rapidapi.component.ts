import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  constructor(private _firebaseServices: FirebaseService) { }

  ngOnInit() {
  
  }
  CreatePost(){  
    this._firebaseServices.createPost().subscribe(res=>{
      console.log('firebase post',res);
      
    })
    

  }
}
