import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-person-single',
  templateUrl: './person-single.component.html',
  styleUrls: ['./person-single.component.css']
})
export class PersonSingleComponent implements OnInit {
  @Input() person: Person
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
