import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Zoo Pal!</h1>
      <h2>Animal List for {{month}}/{{day}}/{{year}}</h2>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  </div>
  `
})

export class AppComponent {
    currentFocus: string = 'Animal List';
    currentTime = new Date();
    month: number = this.currentTime.getMonth() + 1;
    day: number = this.currentTime.getDate();
    year: number = this.currentTime.getFullYear();
    selectedAnimal = null;

      masterAnimalList: Animal[] = [
        new Animal("Girrafe", "Bigglesworth", 7, "Herbivore", "SafariLand", 5, "Male", "Food", "Being Hungry", "2017-01-05"),
        new Animal("Elephant", "Dumbo", 2, "Herbivore", "SafariLand", 10, "Male", "Being Bathed", "Crowds", "2018-02-17")
      ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
