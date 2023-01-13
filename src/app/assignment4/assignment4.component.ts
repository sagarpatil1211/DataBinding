import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component {
  friend = "";
  friends:any = [];


  add(){
   if(this.friend.trim()!=""){
     // alert("hello")
     this.friends.push(this.friend);
     // console.log(this.friends);
     this.friend = ""
   }
  }

  remove(i:number){
    // alert("remove")
    if(confirm("Sure to delete")){
      this.friends.splice(i,1);
    }
    
  }


}
