import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // step 1: Create Custom Event
  // 1.1 Create an object of EventEmitter class
  @Output() profileLoaded = new EventEmitter(); // 1.2 Make the obj as Custom Event

  personName = 'Santhosh';

  constructor() { }

  ngOnInit(): void { }

  onLoadProfile(event: any): void {
    event.target.innerText = 'Loading Profile...';
    // mocking an ajax call
    setTimeout(() => {
      event.target.innerText = 'Loaded Profile...';
      // step 2: Emit that custom event through program
      this.profileLoaded.emit(this.personName); // step 3: Along with the emitted event, send data to the parent comp
      // Refer this comp's html for step 4 of CEB
    }, 3000);
  }

}
