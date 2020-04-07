import { Component, OnInit, Input } from "@angular/core";
import { PeopleService } from "../people.service";
import { People } from "../people";

@Component({
  selector: "app-people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"],
})
export class PeopleListComponent implements OnInit {
  searchText;
  people: People[] = [];
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }
  onDelete(id: number) {
    this.peopleService.deletePeople(id);
  }
}
