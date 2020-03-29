import { Component } from '@angular/core';
import { HomeDataService } from 'src/app/services/home-data.service';
import { HomeRootData, Portadas } from 'src/app/models/home-data.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  portadas: Portadas[];

  constructor(
    private home: HomeDataService
  ) {
    this.home.getPortadas().subscribe(
      (data: HomeRootData) => {
        this.portadas = data.portadas;
      }
    );
  }
}
