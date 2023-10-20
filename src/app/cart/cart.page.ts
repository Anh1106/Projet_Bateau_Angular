import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  purchasedPlats: Array<{ name: string; price: number; purchase: boolean }> = [];

  constructor() { }

  ngOnInit() {
    const purchasedPlatsStr = localStorage.getItem('purchasedPlats');
    if (purchasedPlatsStr) {
      this.purchasedPlats = JSON.parse(purchasedPlatsStr);
    }

    console.log(this.purchasedPlats);
  }
}
