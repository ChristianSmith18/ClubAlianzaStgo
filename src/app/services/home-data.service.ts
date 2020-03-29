import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getPortadas() {
    return this.firestore.collection('rutas').doc('home').valueChanges();
  }
}
