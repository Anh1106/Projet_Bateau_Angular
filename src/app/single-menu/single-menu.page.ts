import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.page.html',
  styleUrls: ['./single-menu.page.scss'],
})
export class SingleMenuPage implements OnInit {
  plats: Array<{ name: string; price: number; purchase: boolean }> = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe((params) => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.plats = navigationExtras['state']['plats'];
      }
    });
  }

  addToCard(plat: any) {
    const index = this.plats.findIndex((p) => p === plat);

    if (index !== -1) {
      this.plats[index].purchase = !this.plats[index].purchase;
    }

  }

  ngOnInit() {}
}
