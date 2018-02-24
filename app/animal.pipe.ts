import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})
export class AnimalPipe implements PipeTransform {


  transform(input: Animal[], age, diet) {
    var output: Animal[] = [];
    if(age === "youngAnimal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (age === "adultAnimal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "carnivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet = "carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "herbivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet = "herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
