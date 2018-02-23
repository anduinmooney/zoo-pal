import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <p>Animal over 2? {{childSelectedAnimal.age}}</p>
      <h3>Edit Animal</h3>
      <label>Enter animal name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Enter age</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Enter amount of caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
@Input() childSelectedAnimal: Animal;
@Output() doneButtonClickedSender = new EventEmitter();

doneButtonClicked() {
  this.doneButtonClickedSender.emit();
  }
}
