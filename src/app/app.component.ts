import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
declare var Android: Android;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  title = 'sampleprojectangularuniversal';

  heroes = HEROES;
  selectedHero: Hero;
  divOptions = { divDisplay: false, divInnerHtml: '' };

  constructor(private ngZone: NgZone) {
    window['divOptions'] = this.divOptions;
    window['sendDataToAngular'] = (str: string) => this.sendDataToAngular(str);
    window['addListData'] = (str: Hero) => this.addListData(str);
  }

  addListData(heroList: Hero): void {
    console.log('addListData', heroList);

    this.ngZone.run(() => {
      this.heroes.push({ id: 201, name: 'ksksksk' });
      this.heroes.push(heroList);
    });

    console.log('heroes1234', this.heroes);
  }

  sendDataToAngular(str: string): void {
    alert(str);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  open(): void {
    this.heroes.push({ id: 200, name: 'krishna' });
    Android?.showToast('Hello');
    console.log('return from android :', Android.callBackToAngular());
  }
}

interface Hero {
  id: number;
  name: string;
}
interface Android {
  //send data to android
  showToast(toast: string): void;
  //call the android function and get data from android
  callBackToAngular(): string;
}

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];
