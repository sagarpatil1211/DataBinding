import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent {

  title = '2_data_binding';
  symbol = '{{ }}'
  name = 'Sagar Patil'
  no = 0;
  enable = false;

  constructor(){
    setInterval(()=>{
      this.no++;
      if (this.no%2 ==0) {
        this.enable = true
      } else {
        this.enable = false;
      }
    },1000)
  }

  show(event:Event){
    alert("Hello " + this.name)
    console.log(event.target);
    let ctrl = <HTMLButtonElement>(event.target);
    console.log(ctrl.value);



  }

  // Assignment 1.

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  monthChanged(event:Event){
    console.log(event.target);
    let ctrl = <HTMLSelectElement>event.target;  // convert into html value
    console.log(ctrl.value);
    alert("You select " + ctrl.value)
  }

  // Assignment 2.

  text ="";
  clicked(){
    if(this.text.trim() !=""){
      alert("Hello " + this.text)
    }
    this.text = " "
  }

  inputText(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.text = ctrl.value;
  }
}
