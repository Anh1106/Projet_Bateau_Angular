import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu = [
    {
      title: 'Poissons',
      plats: [
        { title: 'Filet Bar de ligne ', price: 7, purchase: false },
        { title: 'Bar de ligne portion ', price: 10, purchase: false },
        { title: 'Aile de raie ', price: 10, purchase: false },
        { title: 'Lieu jaune de ligne ', price: 12, purchase: false },
        { title: 'Filet Julienne ', price: 19, purchase: false },
        { title: 'Bar de ligne ', price: 30, purchase: false },
      ],
    },
    {
      title: 'Coquillages',
      plats: [
        { title: 'Moules de pêche', price: 7, purchase: false },
        { title: 'Bouquets cuits', price: 8, purchase: false },
        { title: 'Huitres N°2 St Vaast', price: 9.5, purchase: false },
        { title: 'Huitres N°3 OR St Vaast', price: 12, purchase: false },
        { title: 'Huitres N°4 St Vaast', price: 19, purchase: false },
        { title: 'Huitres N°5 St Vaast', price: 24, purchase: false },
        { title: 'Huitres N°6 St Vaast', price: 38, purchase: false },
        { title: 'Huitres N°7 St Vaast', price: 48, purchase: false },
      ],
    },
    {
      title: 'Crustacés',
      plats: [{ title: 'Araignées', price: 7, purchase: false }],
    },
    {
      title: 'Promotions',
      plats: [{ title: 'Moules de pêche', price: 7, purchase: false }],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
