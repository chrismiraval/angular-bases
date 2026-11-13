import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  nombre = 'ironman';
  edad = 45;

  get capitalizedName() {
    return this.nombre.toUpperCase();
  }

  getHeroDescription() {
    return `${this.nombre} - ${this.edad}`;
  }

  updateName() {
    this.nombre = 'Spiderman';
  }

  updateAge() {
    this.edad = 25;
  }

  resetValues() {
    this.nombre = 'ironman';
    this.edad = 45;
  }
}
