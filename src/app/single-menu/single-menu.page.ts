import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.page.html',
  styleUrls: ['./single-menu.page.scss'],
})
export class SingleMenuPage implements OnInit {
  plats: Array<{ name: string; price: number; purchase: boolean }> = [];
  purchasedPlats: Array<{ name: string; price: number; purchase: boolean }> = [];

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
      this.plats[index].purchase = !this.plats[index].purchase;

      if (this.plats[index].purchase) {
        // Si le produit est acheté (purchase = true), ajoutez-le à purchasedPlats
        this.purchasedPlats.push(this.plats[index]);
      } else {
        // Si le produit n'est plus acheté (purchase = false), retirez-le de purchasedPlats
        const purchasedIndex = this.purchasedPlats.findIndex((p) => p === plat);
        if (purchasedIndex !== -1) {
          this.purchasedPlats.splice(purchasedIndex, 1);
        }
      }
    }
    // console.log(this.purchasedPlats);
  }


  ngOnInit() {}
}
