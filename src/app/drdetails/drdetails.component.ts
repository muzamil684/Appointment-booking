import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Doctor } from '../MODEL/dr.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drdetails',
  templateUrl: './drdetails.component.html',
  styleUrls: ['./drdetails.component.css']
})
export class DrdetailsComponent  {
  
  constructor(private router:Router){}

  //to receive data from parent as input
  @Input() drObj:Doctor;

  //create a custom event
  @Output() myEvent=new EventEmitter();


  sendProductDetailsToParent(drTitle: any){
      //emit data to parent
      this.myEvent.emit(drTitle);
  }

  book(): void{
    this.router.navigateByUrl("/appointment");
  }

}
