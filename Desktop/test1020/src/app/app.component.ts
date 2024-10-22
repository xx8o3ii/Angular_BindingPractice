import { Component } from '@angular/core';

@Component({
  // 選擇器名稱，可以在別的組件引用
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1021';
  taro='1125'
  // TypeScript 的型別註解，非強制性，但建議要加 ex:string
  // 使用 $event 的事件處理函式通常需要型別註解來明確指出事件的資料結構
  // TypeScript 不會自動推斷 any 型別，尤其在嚴格模式下，需要手動指定。
  shibashit($event:any){
    console.log($event);
  }
  number = 5;
  //this 關鍵字用於引用當前物件的屬性或方法。當你需要在類別內部的某個方法中修改物件的屬性（如 number）時，必須使用 this 來明確指定你想修改的是物件的屬性而不是局部變數。
  plus(){
    this.number = this.number+1
  }
  minus(){
    this.number -= 1
  }
}
