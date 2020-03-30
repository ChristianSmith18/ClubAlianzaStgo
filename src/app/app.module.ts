import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HomeDataService } from './services/home-data.service';
import { AboutComponent } from './pages/about/about.component';
import { CalendarDataService } from './services/calendar-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialBarComponent,
    HomeComponent,
    CalendarComponent,
    InscriptionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    HomeDataService,
    CalendarDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
