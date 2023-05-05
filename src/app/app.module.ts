import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './components/dashboard/doctor/doctor.component';
import { PatientComponent } from './components/dashboard/patient/patient.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddDoctorComponent } from './components/dashboard/doctor/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDoctorComponent } from './components/dashboard/doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './components/dashboard/doctor/view-doctor/view-doctor.component';
import { AddPatientComponent } from './components/dashboard/patient/add-patient/add-patient.component';
import { ViewPatientComponent } from './components/dashboard/patient/view-patient/view-patient.component';
import { DeletePatientComponent } from './components/dashboard/patient/delete-patient/delete-patient.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    ViewDoctorComponent,
    AddPatientComponent,
    ViewPatientComponent,
    DeletePatientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddDoctorComponent]
})
export class AppModule { }
