import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplaces',
  templateUrl: './marketplaces.component.html',
  styleUrls: ['./marketplaces.component.css'],
})
export class MarketplacesComponent {
  slides = [
    {
      image: './../assets/logos/xoxno_4988d9a17b.png',
      caption: 'Slide 1',
    },
    {
      image: './../../assets/logos/frameit_0cdbc68516.svg',
      caption: 'Slide 2',
    },
    {
      image: './../../assets/logos/eneftor_0ba3e7c46e.png',
      caption: 'Slide 3',
    },
    {
      image: './../../assets/logos/multiversx_nft_marketplace_krogan_d72cb92c33.png',
      caption: 'Slide 4',
    },
    {
      image: './../../assets/logos/deadrare_c5c65cd58d.svg',
      caption: 'Slide 5',
    },

  ];
  currentSlide = 0;

}
