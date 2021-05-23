import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EtudientComponent } from './etudient/etudient.component';
import { EnseigniantComponent } from './enseigniant/enseigniant.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginEtudientComponent } from './login-etudient/login-etudient.component';
import { LoginAdminstrationComponent } from './login-adminstration/login-adminstration.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EtudientComponent,
    EnseigniantComponent,
    ClasseComponent,
    MatiereComponent,
    AcceuilComponent,
    LoginEtudientComponent,
    LoginAdminstrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
