import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
        { name: 'Filet Bar de ligne ', price: 7, purchase: false, quantity:0 },
        { name: 'Bar de ligne portion ', price: 10, purchase: false , quantity:0 },
        { name: 'Aile de raie ', price: 10, purchase: false, quantity:0  },
        { name: 'Lieu jaune de ligne ', price: 12, purchase: false , quantity:0 },
        { name: 'Filet Julienne ', price: 19, purchase: false, quantity:0  },
        { name: 'Bar de ligne ', price: 30, purchase: false, quantity:0  },
      ],
    },
    {
      title: 'Coquillages',
      plats: [
        { name: 'Moules de pêche', price: 7, purchase: false, quantity:0  },
        { name: 'Bouquets cuits', price: 8, purchase: false, quantity:0  },
        { name: 'Huitres N°2 St Vaast', price: 9.5, purchase: false, quantity:0  },
        { name: 'Huitres N°3 OR St Vaast', price: 12, purchase: false , quantity:0 },
        { name: 'Huitres N°4 St Vaast', price: 19, purchase: false, quantity:0  },
        { name: 'Huitres N°5 St Vaast', price: 24, purchase: false, quantity:0  },
        { name: 'Huitres N°6 St Vaast', price: 38, purchase: false , quantity:0 },
        { name: 'Huitres N°7 St Vaast', price: 48, purchase: false , quantity:0 },
      ],
    },
    {
      title: 'Crustacés',
      plats: [{ name: 'Araignées', price: 7, purchase: false , quantity:0 }],
    },
    {
      title: 'Promotions',
      plats: [{ name: 'Moules de pêche', price: 7, purchase: false , quantity:0 }],
    },
  ];

  goToPlats(plats: Array<{ name: string; price: number; purchase: boolean }>) {
    let navigationExtras: NavigationExtras = {
      state: {
        plats: plats,
      },
    };
    this.router.navigate(['/single-menu'], navigationExtras);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
