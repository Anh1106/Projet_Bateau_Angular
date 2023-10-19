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
      title: 'Bistrot Landais',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
    },
    {
      title: 'Bistrot Landais',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
    },
    {
      title: 'Bistrot des Gascons',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",

    },
    {
      title: 'Les fous de lîle',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque."
    },
  ];

  goToRecette(title: any,info : any) {
    let navigationExtras: NavigationExtras = {
      state: {
        title: title,
        info: info,
      },
    };
    this.router.navigate(['/une-recette'], navigationExtras);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}

