import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public newstyle="success";
 public newonebind="danger";
 public hasError:boolean=true;
 public firstError:boolean=false;
 public secondError:boolean=true;
 public thirdError={
  "success": this.firstError,
  "danger":!this.firstError,
  "newtext":this.secondError,
  
 };

 public styleError:boolean=false;
 public newcolor="red";
 public newonecolor={
  color:"darkblue",
  fontSize:"40px",
  fontWeight:"600"
 };

 public greetings="";
 public typingvalue="";
 public name="";
 public displayname:boolean=false;
 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
     this.greetings="Welcome to bharathi website"
  }

  loginmessage(value:any){
    this.typingvalue=value;
    console.log(value);
  }

}
