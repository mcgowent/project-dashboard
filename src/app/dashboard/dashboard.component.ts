import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Fake Data
import { fakeDeets } from './fakeProjectDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  routeID: number;
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeID = parseInt(this.route.snapshot.paramMap.get('id')) - 1;
    this.data = fakeDeets[this.routeID];
    console.log('Dashboard Data:', this.data.name);
  }
}
