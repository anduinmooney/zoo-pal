import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <div class = "well">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Zoo Animals</option>
      <option value="youngAnimal">Young Zoo Animals</option>
      <option value="adultAnimal" selected="selected">Adult Zoo Animals</option>
    </select>
      <ul>
        <li  *ngFor="let currentAnimal of childAnimalList | age:filterByAge"><div class = "name">Name: {{currentAnimal.name}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></div> Species: {{currentAnimal.species}}<br> Age: {{currentAnimal.age}}<br> Diet: {{currentAnimal.diet}}<br> Location: {{currentAnimal.location}}<br> Amount of Caretakers: {{currentAnimal.caretakers}}<br> Gender: {{currentAnimal.sex}} <br> Likes: {{currentAnimal.likes}}<br> Dislikes: {{currentAnimal.dislikes}}<br> Date Admitted: {{currentAnimal.date}}
        </li>
      </ul>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "adultAnimal";
  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
  }

  toggleAge(clickedAnimal: Animal, setAge: number) {
     clickedAnimal.age = setAge;
   }
}
