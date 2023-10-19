import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  menu = [
    {
      title: 'Bistrot des Gascons',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/desGascons.png"
    },
    {
      title: 'Les fous de lîle',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/fousDeLIle.png"
    },
    {
      title: 'Bistrot Landais',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/bistrotLandais.png"
    },
    {
      title: 'Villa 9-Trois',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/villa9Trois.png"
    },
    {
      title: 'Bistrot du Sommelier',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/duSommelier.png"
    }
  ];

  goToResto(title: any,info : any, img:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        title: title,
        info: info,
        img: img
      },
    };
    this.router.navigate(['/un-restaurant'], navigationExtras);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
