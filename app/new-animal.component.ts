import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class = "well">
  <h1>New Animal</h1>
  <div>
    <label>Enter Animal Species:</label>
    <input #newSpecies>
  </div>
  <br>
  <div>
    <label>Enter Animal Name:</label>
    <input #newName>
  </div>
  <br>
  <div>
    <label>Enter Animal Age:</label>
    <input type="number" #newAge>
  </div>
  <br>
  <div>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
  </div>
  <br>
  <div>
    <label>Enter Animal Location:</label>
    <input #newLocation>
  </div>
  <br>
  <div>
    <label>Enter Animal Caretaker Amount:</label>
    <input type="number" #newCaretakers>
  </div>
  <br>
  <div>
    <label>Enter Animal Sex:</label>
    <input #newSex>
  </div>
  <br>
  <div>
    <label>Date Admitted:</label>
    <input type="date" #newDate>
  </div>
  <br>
  <div>
    <label>Enter Animal Likes:</label>
    <input #newLikes>
  </div>
  <br>
  <div>
    <label>Enter Animal Dislikes:</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newDate.value); newSpecies.value='';">Add</button>
  </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string,  name: string,  age: number,  diet: string,  location: string,  caretakers: number,  sex: string,  likes: string,  dislikes: string, date: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes, date);
    this.newAnimalSender.emit(newAnimalToAdd);
    alert("Animal Added!")
  }
}
