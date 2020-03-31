export interface GalleryRootData {
  photos: Photo[];
}

export interface Photo {
  link: string;
  title: string;
  type: string;
}
