import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .brownText{
      color: brown;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // string interpolation related
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;

  // property binding
  averageExp = 2;

  // Event Binding
  message = '';

  // Ng Styles
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontStyle: 'italic'
  };

  // Two way data binding
  courseName = 'Angular';

  dataReceivedFromChildComp: string;

  // if static true -- the data would be available in ngOnInit lifecycle Hook
  @ViewChild(CebComponent, { static: true }) cebData: CebComponent;
  // if static false -- the data would be available in ngAfterViewInit Lifecycle hook
  // @ViewChild(CebComponent, { static: false }) cebData: CebComponent;

  // *ngIf related
  isLoggedIn: boolean;

  // *ngFor related
  skillList: string[] = [
    'HTML', 'CSS', 'JS'
  ];

  // ngSwitch
  name: string;
  val: number;
  selectedValue = 'One';

  items: any = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  // Event Binding Related
  onClickHandler(): void {
    this.message = 'clicked';
  }

  disableHandler(event: any): void {
    event.target.innerText = 'Clicked';
    event.target.disabled = true;
  }

  clickHandler(element: any, label: string): void {
    element.innerText = label;
    element.disabled = true;
  }

  profileLoadedHandler(event: any): void {
    // step 5: Display it somwhere in parent comp
    alert('Inside parent comp');
    this.dataReceivedFromChildComp = event;
  }
}
