import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  menu = [
    {
      title: 'De la Brise',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/deLaBrise.png"
    },
    {
      title: 'Saphir',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/saphir.png"
    },
    {
      title: 'Gast Micher',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/gastMicher.png"
    },
    {
      title: 'Aquilon',
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis enim non lacinia ultricies. Vivamus libero nisl, dapibus nec ex vitae, laoreet ullamcorper purus. Etiam tincidunt, velit a rhoncus sodales, libero orci iaculis elit, quis accumsan erat justo sit amet justo. Pellentesque vel scelerisque augue. Integer eros arcu, facilisis vitae sem a, tempor vehicula eros. Maecenas dignissim eget mauris eu auctor. Phasellus pulvinar, diam at fringilla efficitur, nibh purus bibendum diam, at tempus magna eros et ligula. Maecenas placerat luctus purus et vestibulum. Cras quis libero erat. Donec in tellus ex. Curabitur scelerisque eros sit amet tempus interdum. Vestibulum nec eros neque.",
      img: "../../assets/images/aquilon.png"
    }

  ];

  goToBateau(title: any,info : any, img:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        title: title,
        info: info,
        img:img
      },
    };
    this.router.navigate(['/un-bateau'], navigationExtras);
  }

  goToContact(){
    this.router.navigate(['/contact']);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}


