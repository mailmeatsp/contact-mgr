import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  @Input() age = '20'; // @Input is make as custom property parent to child

  constructor() { }

  ngOnInit(): void {
  }

}
