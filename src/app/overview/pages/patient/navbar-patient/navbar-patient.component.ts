import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-navbar-patient',
  templateUrl: './navbar-patient.component.html',
  styleUrls: ['./navbar-patient.component.css']
})
export class NavbarPatientComponent implements OnInit {

  constructor(private router: Router, private patientService: UserService) { }

  ngOnInit(): void {
  }
  options = [
    { path: '/home-patient', title: 'Home'},
    { path: '/files-patient', title: 'Files'},
    { path: '/myDoctor-patient', title: 'My Doctor'},
    { path: '/messages-patient', title: 'Messages'},
    { path: '/reminders-patient', title: 'Reminders'},
    { path: '/profile-patient', title: 'Profile'},
  ]
  logOut(){
    localStorage.removeItem("patient")
    this.router.navigate(['login'])
  }

}
