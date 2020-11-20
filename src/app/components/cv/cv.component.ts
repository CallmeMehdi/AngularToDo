import { Component, OnInit, NgModule } from '@angular/core';
import { Person } from '../../classes/Person';
import { EmbauchesService } from 'src/app/services/embauche-service.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})



export class CvComponent implements OnInit {

  activeUser: Person;

  constructor(
    private embauchesService: EmbauchesService

  ) { }

  ngOnInit() {
  }

  updateDetails(newUser: Person){
    this.activeUser = newUser;
    this.embauchesService.embaucherPersonne(newUser);
  }
}
