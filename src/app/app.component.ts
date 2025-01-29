// **************************************************
// Learning Services
//
// Note: Learning Observable!
// **************************************************

// **************************************************
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import * as Interfaces from "./interfaces/person";
import { PersonService } from "./services/person.service";
import { CommonModule } from "@angular/common";
// **************************************************

@Component({
  selector: "app-root",
  imports: [CommonModule],
 
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public constructor(private personService: PersonService) {}

  public ngOnInit() {
    // this.people =
    //   this.personService.getAll();

    // this.personService.getAll()
    //   .then(result => {
    //     this.people = result;
    //   })
    //   .catch(error => {
    //     this.error = error;
    //   });

    this.personService.getAll().subscribe(
      result => {
        this.people = result;
      },
      error => {
        this.error = error;
      },
      () => {
        console.log(`Completed!`);
      }
    );
  }

  public error: Error;
  public people: Interfaces.Person[];
}
