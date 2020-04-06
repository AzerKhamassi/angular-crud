import { Injectable } from "@angular/core";
import { People } from "./people";

@Injectable({
  providedIn: "root",
})
export class PeopleService {
  private people: People[] = [
    {
      id: 7,
      firstName: "Azer",
      lastName: "Khamassi",
      phone: "03256987",
    },
    {
      id: 5,
      firstName: "Houcem",
      lastName: "Nasri",
      phone: "01478529",
    },
    {
      id: 9,
      firstName: "Kabil",
      lastName: "Naceur",
      phone: "87987456",
    },
  ];
  constructor() {}
  getPeople() {
    return this.people;
  }
  getPep(id: number) {
    return this.people.find((ppl) => ppl.id === id);
  }
  addPeople(people: People) {
    this.people.push(people);
  }
  updatePeople(id: number, firstName: string, lastName: string, phone: string) {
    const p = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };
    const oldIndex = this.people.findIndex((ppl) => ppl.id === p.id);
    this.people[oldIndex] = p;
  }
  deletePeople(id: number) {
    const i = this.people.findIndex((ppl) => ppl.id === id);
    if (i != -1) {
      this.people.splice(i, 1);
    }
  }
}
