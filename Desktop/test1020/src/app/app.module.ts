import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // 確認匯入 FormsModule

@NgModule({
  // 與畫面相關的程式 只能存在於一個模組 ex:component,directive(用來修改 DOM 的結構或行為 ex:ngFor),pipe(改變資料的顯示形式 ex:date)
  declarations: [
    AppComponent
  ],
  // 代表要使用哪些模組所提供的功能
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  //要在B模組使用A模組某個元件
  exports:[],
  //用來決定哪些service允許被注入 ex:UserService 來處理有關用戶的 CRUD 操作（創建、讀取、更新、刪除）。
  providers: [],
  //用於定義啟動應用程式的主要根元件
  bootstrap: [AppComponent]
})
export class AppModule { }
