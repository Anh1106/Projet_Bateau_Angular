import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.page.html',
  styleUrls: ['./single-menu.page.scss'],
})
export class SingleMenuPage implements OnInit {
  plats: Array<{ name: string; price: number; purchase: boolean }> = [];
  purchasedPlats: Array<{ name: string; price: number; purchase: boolean }> =
    [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe((params) => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.plats = navigationExtras['state']['plats'];
      }
    });
  }

  addToCart(plat: any) {
    const index = this.plats.findIndex((p) => p === plat);

    if (index !== -1) {
      const isAlreadyPurchased = this.isProductPurchased(plat);

      if (isAlreadyPurchased) {
        const purchasedIndex = this.purchasedPlats.findIndex((p) => p.name === plat.name);
        if (purchasedIndex !== -1) {
          this.purchasedPlats.splice(purchasedIndex, 1);
        }
      } else {
        this.purchasedPlats.push(this.plats[index]);
      }

      localStorage.setItem('purchasedPlats', JSON.stringify(this.purchasedPlats));
    }
    // console.log(this.purchasedPlats);
  }


  isProductPurchased(plat: any): boolean {
    return this.purchasedPlats.some((purchasedPlat) => purchasedPlat.name === plat.name);
  }


  ngOnInit() {
    const purchasedPlatsStr = localStorage.getItem('purchasedPlats');
    if (purchasedPlatsStr) {
      this.purchasedPlats = JSON.parse(purchasedPlatsStr);
    }
  }
}
