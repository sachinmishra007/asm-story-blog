import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-resource-found',
  templateUrl: './no-resource-found.component.html',
  styleUrls: ['./no-resource-found.component.scss']
})
export class NoResourceFoundComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  mainPage() {
    this._router.navigateByUrl('');
  }
}
