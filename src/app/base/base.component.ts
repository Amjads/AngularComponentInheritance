import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: `<span>NO UI TO BE FOUND HERE!</span>`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openPage(routename: string) {
    this.router.navigateByUrl(`/${routename}`);
  }
}
