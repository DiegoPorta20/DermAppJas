import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/pages/home/home.component';
import { NavbarComponent } from './public/pages/navbar/navbar.component';
import { ViewComponent } from './public/pages/view/view.component';
import { WhoStartComponent } from './public/pages/who-start/who-start.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ViewDermatologistComponent } from './overview/pages/dermatologist/view-dermatologist/view-dermatologist.component';
import { NavbarDermatologistComponent } from './overview/pages/dermatologist/navbar-dermatologist/navbar-dermatologist.component';
import {MatIconModule} from "@angular/material/icon";
import { ProfileDermatologistComponent } from './profiles/dermatologist/profile-dermatologist/profile-dermatologist.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ListPatientsComponent } from './history/list-patients/list-patients.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProfileDermatologistComponent } from './profiles/dermatologist/edit-profile-dermatologist/edit-profile-dermatologist.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { InfoPatientSpecificComponent } from './history/info-patient-specific/info-patient-specific.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { ChatDermatologistComponent } from './overview/pages/dermatologist/chat-dermatologist/chat-dermatologist.component';
import {AnalyticsDermatologistComponent} from "./overview/pages/dermatologist/analytics-dermatologist/analytics-dermatologist.component";
import { ProfilePatientComponent } from './profiles/patient/profile-patient/profile-patient.component';
import { ViewPatientComponent } from './overview/pages/patient/view-patient/view-patient.component';
import { NavbarPatientComponent } from './overview/pages/patient/navbar-patient/navbar-patient.component';
import { EditProfilePatientComponent } from './profiles/patient/edit-profile-patient/edit-profile-patient.component';
import { LoginFormDermatologistComponent } from './public/security/login-form-dermatologist/login-form-dermatologist.component';
import { LoginFormPatientComponent } from './public/security/login-form-patient/login-form-patient.component';
import { LoginFormComponent } from './public/security/login-form/login-form.component';
import { TypeOfUserComponent } from './public/security/type-of-user/type-of-user.component';
import {MatSelectModule} from "@angular/material/select";
import { MyDoctorPatientComponent } from './overview/pages/patient/my-doctor-patient/my-doctor-patient.component';
import { RemindersPatientComponent } from './overview/pages/patient/reminders-patient/reminders-patient.component';
import { AboutComponent } from './public/pages/about/about.component';
import {PatientsService} from "./overview/services/patients.service";
import {DermatologistsService} from "./overview/services/dermatologists.service";
import {MatDialogModule} from "@angular/material/dialog";
import { MyFilesPatientComponent } from './overview/pages/patient/my-files-patient/my-files-patient.component';
import { MessagesPatientComponent } from './overview/pages/patient/messages-patient/messages-patient.component';
import { HomePatientComponent } from './overview/pages/patient/home-patient/home-patient.component';
import { ScheduleDermatologistComponent } from './overview/pages/dermatologist/schedule-dermatologist/schedule-dermatologist.component';
import {MatListModule} from "@angular/material/list";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {ProfilesImgService} from "./overview/services/profiles-img.service";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import { RegisterPatientComponent } from './public/security/register-patient/register-patient.component';
import { RegisterDermatologistComponent } from './public/security/register-dermatologist/register-dermatologist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ViewComponent,
    WhoStartComponent,
    ViewDermatologistComponent,
    NavbarDermatologistComponent,
    ProfileDermatologistComponent,
    ListPatientsComponent,
    EditProfileDermatologistComponent,
    InfoPatientSpecificComponent,
    ChatDermatologistComponent,
    AnalyticsDermatologistComponent,
    ProfilePatientComponent,
    ViewPatientComponent,
    NavbarPatientComponent,
    EditProfilePatientComponent,
    LoginFormDermatologistComponent,
    LoginFormPatientComponent,
    LoginFormComponent,
    TypeOfUserComponent,
    MyDoctorPatientComponent,
    RemindersPatientComponent,
    AboutComponent,
    MyFilesPatientComponent,
    MessagesPatientComponent,
    HomePatientComponent,
    ScheduleDermatologistComponent,
    PageNotFoundComponent,
    RegisterPatientComponent,
    RegisterDermatologistComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatListModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatOptionModule,
        FormsModule
    ],
  providers: [PatientsService, DermatologistsService,ProfilesImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
