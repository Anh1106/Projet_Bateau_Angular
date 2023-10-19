import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-un-restaurant',
  templateUrl: './un-restaurant.page.html',
  styleUrls: ['./un-restaurant.page.scss'],
})
export class UnRestaurantPage implements OnInit {
  title : any;
  infos : any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe((params) => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.infos = navigationExtras['state']['info'];
        this.title = navigationExtras['state']['title'];
      }
    });
  }

  ngOnInit() {}
}

