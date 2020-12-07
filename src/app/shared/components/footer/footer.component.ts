import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item backToTop">
          <a class="nav-link" routerLink="/">Back to Top</a>
        </li>
      </app-menu>
      <p class="redText">Copyright 2020 | Santhosh</p>
      <p class="happyText">Happily developed by Santhosh</p>
    </div>
  `,
  styles: [
    `
    .happyText {
      color: teal;
      font-size: 12px;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
