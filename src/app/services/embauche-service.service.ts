import { Injectable } from '@angular/core';
import { Person } from '../classes/Person';

@Injectable({
  providedIn: 'root'
})
export class EmbauchesService {

  personnesEmbauches: Person[] = [];
  constructor() { }

  embaucherPersonne(personne : Person){
    console.log(personne);
    this.personnesEmbauches.push(personne);
  }
  getList(){
    return this.personnesEmbauches;
  }
}
