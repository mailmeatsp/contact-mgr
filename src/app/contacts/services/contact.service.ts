import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root' // singleton
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Create
  createContact(contactFormData: Contact): Promise<Contact> { // 1. get the data from the comp ts
    // 2. send the data to the rest api backend
    // 2.1. what's the rest api url? - http://jsonplaceholder.typicode.com/users
    // 2.2. what's the http method? - POST
    // 2.3. What's the tool we have to use to sent the above data? - HttpClient
    const createContactPromise = new Promise((resolve, reject) => {
      this.http.post(this.REST_API_URL, contactFormData)
        .toPromise()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
        });
    });
    return createContactPromise as Promise<Contact> | Promise<any>;
  }

  // Listing all contacts
  getContacts(): Observable<Contact[]> { // 1. get the req from comp.ts
    // 2. send the req to the rest api
    // 2.1. what's the rest api url? - http://jsonplaceholder.typicode.com/users
    // 2.2. what's the http method? - GET
    // 2.3. What's the tool we have to use to sent the above data? - HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => { // 3. get the resp from the rest api backend
        return res;     // 4. send it back to the comp ts
      }));
  }

  // Contact Details
  getContactById(id: string): Observable<Contact> {
    return this.http.get(this.REST_API_URL + '/' + id)
      .pipe(map((res: Contact) => {
        return res;
      }));
  }

  // Update Contact
  updateContact(contactData: Contact): Observable<Contact> {
    const URL = this.REST_API_URL + '/' + contactData.id;
    return this.http.put(URL, contactData)
      .pipe(map((res: Contact) => {
        return res;
      }));
  }

  // Delete Contact
  deleteContact(contactData: Contact): Observable<Contact> {
    return this.http.delete(this.REST_API_URL + '/' + contactData.id)
      .pipe(map((res: Contact) => {
        return res;
      }));
  }

}
