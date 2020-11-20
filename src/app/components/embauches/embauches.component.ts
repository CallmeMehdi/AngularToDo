import { Component, OnInit } from '@angular/core';
import { Person } from '../../classes/Person';
import { EmbauchesService } from '../../services/embauche-service.service';

@Component({
  selector: 'app-embauches',
  templateUrl: './embauches.component.html',
  styleUrls: ['./embauches.component.css']
})
export class EmbauchesComponent implements OnInit {

  constructor(private embaucheService : EmbauchesService) { }

  personnesEmbauches: Person[] = [];

  ngOnInit(): void {
    this.personnesEmbauches= this.embaucheService.getList();
  }

}
