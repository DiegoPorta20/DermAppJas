import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DermatologistsService} from "../../../overview/services/dermatologists.service";
import {UserService} from "../../../services/user.service";
import {Dermatologist} from "../../../overview/model/dermatologist";

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
@Component({
  selector: 'app-profile-dermatologist',
  templateUrl: './profile-dermatologist.component.html',
  styleUrls: ['./profile-dermatologist.component.css']
})
export class ProfileDermatologistComponent implements OnInit {
  dermatologist?: Dermatologist

  constructor(private dermatologistsService: UserService) {

  }
  ngOnInit(): void {
    // @ts-ignore
    this.dermatologist = JSON.parse(localStorage.getItem("dermatologist"))
  }

}
