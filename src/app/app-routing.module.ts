import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AboutComponent } from './pages/about/about.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LocationComponent } from './pages/location/location.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'location', component: LocationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
