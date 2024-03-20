import { Component, OnInit } from '@angular/core';
import { BackendService } from '../api/backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  processing = false;
  date: any;
  constructor(private _backend: BackendService) { }

  ngOnInit(): void {
    this.getDate()
  }

  getDate() {

    this.date = new Date().getFullYear();
  }

}
