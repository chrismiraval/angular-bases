import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroes = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  deletedHero: string | undefined = '';

  deleteHero() {
    this.deletedHero = this.heroes.pop();
  }
}
