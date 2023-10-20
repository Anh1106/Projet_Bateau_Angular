import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  purchasedPlats: Array<{
    name: string;
    price: number;
    purchase: boolean;
    quantity: number;
  }> = [];
  totalPrice: number = 0;
  constructor() {}

  ngOnInit() {
    const purchasedPlatsStr = localStorage.getItem('purchasedPlats');
    if (purchasedPlatsStr) {
      this.purchasedPlats = JSON.parse(purchasedPlatsStr);
      this.calculateTotalPrice();
    }

    console.log(this.purchasedPlats);
  }

  calculateTotalPrice() {
    this.totalPrice = this.purchasedPlats.reduce(
      (total, plat) => total + plat.price * plat.quantity,
      0
    );
  }
}
