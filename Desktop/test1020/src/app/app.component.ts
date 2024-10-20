import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1021';
  taro='1125'
  shibashit($event:any){
    console.log($event);

  }
  number = 5;
  plus(){
    this.number = this.number+1
  }
  minus(){
    this.number -= 1
  }
}
