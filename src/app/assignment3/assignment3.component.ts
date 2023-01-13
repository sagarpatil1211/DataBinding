import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  Quarter = ["Quarter 1","Quarter 2","Quarter 3","Quarter 4"]
  allMonths = [
    {name:"Apr", quarter:"Quarter 1"},
    {name:"May", quarter:"Quarter 1"},
    {name:"Jun", quarter:"Quarter 1"},
    {name:"July", quarter:"Quarter 2"},
    {name:"Aug", quarter:"Quarter 2"},
    {name:"Sept", quarter:"Quarter 2"},
    {name:"Oct", quarter:"Quarter 3"},
    {name:"Nov", quarter:"Quarter 3"},
    {name:"Dec", quarter:"Quarter 3"},
    {name:"Jan", quarter:"Quarter 4"},
    {name:"Feb", quarter:"Quarter 4"},
    {name:"Mar", quarter:"Quarter 4"}
  ]
  selectedQuarter = "Quarter 1";
  months = [{name:"",quarter:""}]
  selectedMonth = "Apr";

  constructor(){
    this.changeQuarter();
  }
  changeQuarter(){
  //  alert("hello")
    this.months = this.allMonths.filter((month:any)=>{
      if(month.quarter === this.selectedQuarter)
      return month;
    });
    // console.log(this.months);
    this.selectedMonth = this.months[0].name
  }




}
