import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  sponsors = [
    {
      name: 'ACC Outsourcing Ltda',
      description: 'Empresa que se dedica a los servicios para todo tipo de empresas, en diferentes áreas como lo son la construcción, asesorías informáticas y eventos.',
      url: '../../../assets/img/sponsors/acc.jpeg'
    },
    {
      name: 'Terminal Pesquero Metropolitano',
      description: 'Lugar que alberga una variedad de productos del mar además de la distribución a toda la región metropolitana.',
      url: '../../../assets/img/sponsors/terminal.jpeg'
    },
    {
      name: 'Moro Sport',
      description: 'Empresa chilena dedicada a la confección de ropa deportiva. Con 20 años de experiencia en el rubro textil.',
      url: '../../../assets/img/sponsors/moro.jpeg'
    },
    {
      name: 'Cerveza Muday',
      description: 'Empresa chilena dedicada a la fabricación, preparación y distribución de cerveza artesanal en sus distintas variedades.',
      url: '../../../assets/img/sponsors/muday.jpeg'
    },
    {
      name: 'ETFA Ruido',
      description: 'Empresa especializada en fiscalización ambiental de ruido.',
      url: '../../../assets/img/sponsors/etfa.jpeg'
    }
  ];

  constructor() { }

}
