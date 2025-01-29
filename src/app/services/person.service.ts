// **************************************************
import { Observable, of } from "rxjs";
import { PEOPLE } from "../mocks/people";
import { Injectable } from "@angular/core";
import * as Models from "../models/person";
import * as Interfaces from "../interfaces/person";
// **************************************************

@Injectable({
  providedIn: "root"
})
export class PersonService {
  public constructor() {}

  // public getAll(): Interfaces.Person[] {
  // }

  // public getAll(): Promise<Interfaces.Person[]> {
  // }

  public getAll(): Observable<Interfaces.Person[]> {
    return of(PEOPLE);
  }
}