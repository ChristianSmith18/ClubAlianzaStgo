import { Component } from '@angular/core';
import { GalleryDataService } from 'src/app/services/gallery-data.service';
import { GalleryRootData, Photo } from '../../models/gallery-data.interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  imagenes: Photo[];

  constructor(
    private gallery: GalleryDataService
  ) {
    this.gallery.getAllData().subscribe(
      (data: GalleryRootData) => {
        this.imagenes = data.photos;
      }
    );
  }

}
