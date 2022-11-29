import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  //one way data binding
name: string = 'CodemindTechnology';
serverId: number = 25;
serverStatus : string = 'Offline';
allowNewServer= false;
imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'

serverCreationStatus: string = 'Server not created';

serverName: string = 'codmind.com';//two way data binding

constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    }, 5000);

   }
  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus= 'Server created';
  }

  ngOnInit() {
    
  }

}
