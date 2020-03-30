import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAllData() {
    return this.firestore.collection('rutas').doc('calendar').valueChanges();
  }
}
