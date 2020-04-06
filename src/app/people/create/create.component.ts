import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  private mode = 'create';
  p: People;
  id: number;
  constructor(public ppl:PeopleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.id = +this.route.snapshot.params['id'];
        this.p = {
                  id: this.id,
                  firstName: this.ppl.getPep(this.id).firstName,
                  lastName: this.ppl.getPep(this.id).lastName,
                  phone: this.ppl.getPep(this.id).phone
                 }
      } else {
        this.mode ='create'
      }
    });
  }
  onSave(form: NgForm){
  if (this.mode === 'create') {
    const firstName = form.value.firstname;
    const lastName = form.value.lastname;
    const phone = form.value.phone;
    const pp = {
            id: Math.floor(Math.random()*100),
            firstName: firstName,
            lastName: lastName,
            phone: phone }
    this.ppl.addPeople(pp);
  } else {
    this.ppl.updatePeople(this.id, form.value.firstname, form.value.lastname, form.value.phone);
  }
  this.router.navigate(['/']);
  }

}
