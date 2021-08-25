import { Injectable } from '@angular/core';
import { Person } from '../Person';
import { PERSONS } from '../mock-persons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = "http://localhost:5000/tasks"

  constructor(private Url: HttpClient) { }

  getPersons(){
    return this.Url.get<Person[]>(this.apiUrl);
  }
}
