import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../model/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // step 1: Create HTML from tag equivalent in TS
  addContactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) { // 1. connect to the service - using dependency injection

  }

  ngOnInit(): void {
    // Step 1: continues...
    this.addContactForm = new FormGroup({
      // Step 2; Create HTML input equivalent in TS
      name: new FormControl('', Validators.required), // Step 5: work on validations
      phone: new FormControl('', [Validators.required, Validators.pattern('^((\\+[0-9]{2}-?)|0)?[0-9 ]{10}')]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  // addContactHandler(): void {
  //   // 2. send the above data to the service
  //   this.contactService.createContact(this.addContactForm.value)
  //     .subscribe((res: Contact) => { // 3. get resp from the service
  //       if (res && res.id) {
  //         this.isSaved = true;
  //       }
  //     });
  // }
  async addContactHandler(): Promise<void> {
    // 2. send the above data to the service
    const status: Contact = await this.contactService.createContact(this.addContactForm.value);
    if (status && status.id) {
      this.isSaved = true;
    }

  }

}
