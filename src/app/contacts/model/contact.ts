import { Injectable } from '@angular/core';

// Making the class as model by iplementing interface
export interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
}

// facilitates dependency injectable
@Injectable({
    providedIn: 'root' // singleton
  })

export class Contact implements IContact {
    id: number;
    name: string;
    phone: string;
    email: string;

    // util methods can come here
}

