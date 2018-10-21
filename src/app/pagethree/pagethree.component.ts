import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
