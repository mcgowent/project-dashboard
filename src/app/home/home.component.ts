import { Component, OnInit } from '@angular/core';
// import { CardComponent } from '../common/card/card.component';

import { projects } from '../fakeProjects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('test', projects);
  }
}
