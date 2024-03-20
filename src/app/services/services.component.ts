import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goto(path: string) {
    this._router.navigateByUrl(path)
  }



}
