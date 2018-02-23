import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Zoo Animals</option>
      <option value="youngAnimal">Young Zoo Animals</option>
      <option value="adultAnimal" selected="selected">Adult Zoo Animals</option>
    </select>
    <ul>
      <li (click)="currentAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.species}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}}
        <input *ngIf="currentAnimal.age < 2" type="checkbox" checked (click)="toggleAge(currentAnimal, false)"/>
        <input *ngIf="currentAnimal.age > 2" type="checkbox" (click)="toggleAge(currentAnimal, true)"/>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "youngAnimal";
  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
  }

  currentAge(clickedAnimal: Animal) {
    if(clickedAnimal.age < 2) {
      alert("This animal is young!");
    } else {
      alert("This animal is an adult!");
    }
  }

  toggleAge(clickedAnimal: Animal, setAge: number) {
     clickedAnimal.age = setAge;
   }
}
