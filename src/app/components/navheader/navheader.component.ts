import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navheader',
  templateUrl: 'navheader.component.html',
  styleUrls: ['navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
