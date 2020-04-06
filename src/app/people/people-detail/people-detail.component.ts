import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { Router, ActivatedRoute, } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  ppl:People;
  constructor(private router: Router,
    private pplService: PeopleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param
      this.ppl = this.pplService.getPep(id);
    }
  }
  onBack(){
    this.router.navigate(['/']);
  }

}
