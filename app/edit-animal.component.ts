import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <div class = "well">
        <h3>Edit {{childSelectedAnimal.name}}</h3>
        <label>Enter animal name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <label>Enter age</label>
        <input type="number" [(ngModel)]="childSelectedAnimal.age">
        <label>Enter amount of caretakers</label>
        <input type="number" [(ngModel)]="childSelectedAnimal.caretakers">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  </div>
  <br>
  `
})

export class EditAnimalComponent {
@Input() childSelectedAnimal: Animal;
@Output() doneButtonClickedSender = new EventEmitter();

doneButtonClicked() {
  this.doneButtonClickedSender.emit();
  }
}
