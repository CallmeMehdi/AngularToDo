import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  public personnes: Personne[] = [
    new Personne(1, 'mabrouki', 'mehdi', 'student', '', 1, 21),
    new Personne(2, 'sellaouti', 'aymen', 'teacher', '', 2, 38),
  ];
  constructor() { }
  getCVs(): Personne[] {
    return this.personnes;
  }
}
