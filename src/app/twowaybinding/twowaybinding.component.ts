import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {

    // II. Two way data binding

    country = "India"

    // Assignment 3.
  
    Quarters = ["Quarter 1","Quarter 2","Quarter 3","Quarter 4"];
    selectedQuarter = "Quarter 1";
    selectedMonth = "April";
  
    month = [ 'April', 'May', 'June'];
    QuarterChange(){
      if(this.selectedQuarter =="Quarter 1"){
        this.month = [ 'April', 'May', 'June'];
      }
      else if(this.selectedQuarter =="Quarter 2"){
        this.month = [ 'July', 'August', 'September'];
      }
      else if(this.selectedQuarter =="Quarter 3"){
        this.month = [ 'September', 'October', 'November'];
      }
      else{
        this.month = [ 'December', 'January', 'February'];
      }
    this.selectedMonth = this.month[0];
   }

}
