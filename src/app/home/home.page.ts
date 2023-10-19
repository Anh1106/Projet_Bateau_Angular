import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  onGoToListeRestaurants() {
    this.router.navigate(['/restaurants']);
    console.log("hello resto")
  }

  onGoToListeBateaux() {
    this.router.navigate(['/bateaux']);
    console.log("hello bato")
  }
  onGoToListeRecettes() {
    this.router.navigate(['/recettes']);
  }
  onGoToContact() {
    this.router.navigate(['/contact']);
  }

  onGoToMenu(){
    this.router.navigate(['/menu']);
  }
}
