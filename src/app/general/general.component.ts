import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent  {

  general=[

    {
    drTitle:"Dr. Henry Heimlich",
    description:" General physician ",
    drImage:"https://upload.wikimedia.org/wikipedia/commons/6/63/013014_heimlich_071_1391720248324_2375670_ver1.0_640_480.jpg"
    },
    {
      drTitle:"Dr. Arthur Reese Abright",
    description:"General physician",
    drImage:"https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05042820/Dr.-A.-Reese-Abright.png"
    },
    
    {
      drTitle:"Dr. Francis Crick",
    description:"General physician",
    drImage:"https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05042823/DR.-CORRIE-T.M-ANDERSON.jpg"
    }
    
    
    
    ]
  
  }
