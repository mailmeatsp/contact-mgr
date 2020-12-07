import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../model/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;
  isDeleted = false;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.contactService.getContactById(this.route.snapshot.params.id)
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(contactId)
      .subscribe((res: Contact) => {
        this.contactData = res;
      });
  }

  // Edit Contact
  editModalHandler(): void {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  // Update Contact
  updateHandler(): void {
    this.contactService.updateContact(this.duplicateContactData)
      .subscribe((res: Contact) => {
        if (res && res.id) {
          this.isUpdated = true;
          this.contactData = res;
        }
      });
  }

  // Delete Contact
  deleteContactHandler(): void {
    if (confirm('Are you sure, you want to delete contact')) {
      this.contactService.deleteContact(this.contactData)
        .subscribe((res: any) => {
          if (this.contactData.id && this.contactData) {
            this.isDeleted = true;
            this.contactData = res;
          }
        });
    }
  }

}
