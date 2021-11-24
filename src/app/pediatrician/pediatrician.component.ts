import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pediatrician',
  templateUrl: './pediatrician.component.html',
  styleUrls: ['./pediatrician.component.css']
})
export class PediatricianComponent  {

  pediatrician=[

    {
    drTitle:"Dr. Naresh Trehan",
    description:"Pediatrician for children",
    drImage:"https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05133850/Dr.-Myles.-B.-Abbot.png"
    },
    {
      drTitle:"Dr. Khalid Abbed",
    description:"Pediatrician for women",
    drImage:"https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05133453/Dr.-Khalid.png"
    },
    
    {
      drTitle:"Dr. Mark. F. Aaron",
    description:"Pediatrician ",
    drImage:"https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05043715/DR.-MARK.-F.-AARON.jpg"
    }
    
    
    
    ]

}
