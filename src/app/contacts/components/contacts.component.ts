import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;

  constructor(private contactService: ContactService) { // 1. connect to the service using dep injection
  }

  ngOnInit(): void { // lifecycle hook
    // ideal place for you to send ajax calls
    // 2. send the req to the service
    this.contactsSubscription =  this.contactService.getContacts()
      .subscribe((res: Contact[]) => { // 3. get the resp from the service
        this.contactList = res;
      });
  }

  // will be called when our comp goes out of the view
  ngOnDestroy(): void {
    // ideal place for you to unsubscribe, clear the data, remove intervals
    this.contactsSubscription.unsubscribe();
    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
  }

}
