import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../MODEL/Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg : string;
  public errorMsg : string;
  public appointmentDate : string;
  public name : string;
  public email : string;
  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
  }

  createAppointment(){
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email)
  .subscribe((createdAppointment: Appointment) => {
    this.appointmentDate = '';
    this.name = '';
    this.email = '';
    const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
    this.successMsg= `Appointment Booked Successfully for ${appointmentDate} `;
  },
  (error: ErrorEvent) => {
    this.errorMsg = error.error.message;
  });
  }

}
