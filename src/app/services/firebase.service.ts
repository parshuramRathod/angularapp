import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url = 'https://angular-crud-operations-778b9-default-rtdb.firebaseio.com/';

  constructor(private _httpClient: HttpClient) { }

  createPost() {
    let postData = {
      title: 'This is angular 8 crude',
      content: 'This is firebase crud operation with post'
    }
   return this._httpClient.post(this.url+'post.json',postData);
  }

  createPostDataReactiveForm(fireBasePost:FireBasePost){
   return this._httpClient.post(this.url+'post.json',fireBasePost);

  }
  getPostDataFirebase(){
    return this._httpClient.get(this.url+'post.json');
  }

}
