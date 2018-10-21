import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
