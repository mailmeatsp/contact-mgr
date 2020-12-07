import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText = 'Some quick example text';

  today = new Date();

  dummyText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam beatae iste totam optio ipsum maxime officia.';

  frameworksList: string[] = ['ng', 'react'];

  constructor() { }

  ngOnInit(): void {
  }

  addFrameworkHandler(): void {
    this.frameworksList.push('VueJS');
    console.log(this.frameworksList);
  }

}
