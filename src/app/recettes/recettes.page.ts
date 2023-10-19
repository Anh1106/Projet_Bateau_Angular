import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {
  menu = [
    {
      title: 'Homard',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/homardRecette.png"
    },
    {
      title: 'St Jacques',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/saintJacques.png"
    },
    {
      title: 'Bar',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/barRecette.png"
    },
    {
      title: 'Tourteau',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/logo/tourteau.png"
    },
    {
      title: 'Recette',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/logo/tourteau.png"
    },
    {
      title: 'Recette',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/logo/tourteau.png"
    }
  ];

  goToRecette(title: any,info : any, img: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        title: title,
        info: info,
        img:img
      },
    };
    this.router.navigate(['/une-recette'], navigationExtras);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}

