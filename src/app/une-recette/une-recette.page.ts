import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-une-recette',
  templateUrl: './une-recette.page.html',
  styleUrls: ['./une-recette.page.scss'],
})
export class UneRecettePage implements OnInit {
  title : any;
  infos : any;
  img : any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe((params) => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.infos = navigationExtras['state']['info'];
        this.title = navigationExtras['state']['title'];
        this.img = navigationExtras['state']['img'];
      }
    });
  }

  ngOnInit() {}
}
