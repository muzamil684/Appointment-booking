import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orthopedic',
  templateUrl: './orthopedic.component.html',
  styleUrls: ['./orthopedic.component.css']
})
export class OrthopedicComponent  {

  orthopedic=[

    {
    drTitle:"Dr. John Samuel Urse",
    description:"Orthopedic Surgery    ",
    drImage:"https://mdxvitals-res.cloudinary.com/private_images/h_150,w_150,c_fill,g_face,f_auto,dpr_auto/professionals/1897739/photo.jpg"
    },
    {
      drTitle:"Dr. Joseph D. Dicicco",
    description:" Orthopedic Trauma Surgery",
    drImage:"https://mdxvitals-res.cloudinary.com/private_images/h_150,w_150,c_fill,g_face,f_auto,dpr_auto/professionals/1808835/photo.jpg"
    },
    
    {
      drTitle:"Dr. Paul Gregory Peters",
    description:"Foot and Ankle Orthopedic Surgery",
    drImage:"https://mdxvitals-res.cloudinary.com/private_images/h_150,w_150,c_fill,g_face,f_auto,dpr_auto/professionals/1687902/photo.jpg"
    }
    
   
    
    ]

}