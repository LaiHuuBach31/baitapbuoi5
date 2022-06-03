import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todoList:any = [];

  todo:any = {
    name:'',
    status:false,
  }

  constructor() { }

  ngOnInit(): void {
    this.getTodoLocalSt();
  }

  getTodoLocalSt(){
    // console.log(localStorage.getItem('hihi'));
    if(localStorage.getItem('hihi')){
      let data:any = localStorage.getItem('hihi');
        this.todoList = JSON.parse(data)
         
    } else{
        this.todoList = [];
    }
  }

  addTodo():void {
    this.todoList.push(this.todo);
    localStorage.setItem('hihi',JSON.stringify(this.todoList));
    this.getTodoLocalSt();
  }

  update(i:number):void{
      let data = this.todoList.find((item:any, key:number)=>{
          return key == i;
      });
      // data.status = true;
      if(data.status == true){
          data.status = false;
      } else{
        data.status = true;
      }
  }
  delete(i:number):void {
      let data = this.todoList.find((item:any, key:number)=>{
          return key == i;
      });
      this.todoList.splice(i,1);
      localStorage.setItem('hihi',JSON.stringify(this.todoList));
      this.getTodoLocalSt();
  }
}
