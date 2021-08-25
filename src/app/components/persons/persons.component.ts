import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  myPersons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    //this.myPersons = this.personService.getPersons(); - this is when we have non obervable data

    this.personService.getPersons().subscribe((persons) => this.myPersons = persons);
  }

}

/*

1. zasysamy mock PERSONS i persons jako klase
2. Tworzymy sb persons jako tablice person[] i mozemy jej uzywac wszedzie w danym komponencie

*/
