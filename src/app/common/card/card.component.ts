import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Output() projectData = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log('IN Child', this.data.users);
  }

  sendID(id) {
    console.log('Clicked ID:', id);
  }
}
