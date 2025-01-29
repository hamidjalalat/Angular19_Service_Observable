import * as Interfaces from "../interfaces/person";

export class Person implements Interfaces.Person {
  public constructor(id: string, fullName: string) {
    this.id = id;
    this.fullName = fullName;
  }

  public id: string;
  public age: number;
  public active: boolean;
  public fullName: string;
  public emailAddress: string;
}
