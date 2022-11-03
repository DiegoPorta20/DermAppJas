import { Component, OnInit } from '@angular/core';
import {Patient} from "../../overview/model/patient";
import {PatientsService} from "../../overview/services/patients.service";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {toInteger} from "lodash";

@Component({
  selector: 'app-info-patient-specific',
  templateUrl: './info-patient-specific.component.html',
  styleUrls: ['./info-patient-specific.component.css']
})
export class InfoPatientSpecificComponent implements OnInit {
  patientData: Patient;
  constructor(private route: ActivatedRoute,private patientService: UserService) { this.patientData = {} as Patient; }
  patient:any = {}
  ngOnInit(): void {
    this.showInfoPatient()
  }
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  showInfoPatient(){
    console.log(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatientById(toInteger(this.route.snapshot.paramMap.get('id'))).subscribe((response:any)=> {
      this.patient = response;
    })
  }
}
