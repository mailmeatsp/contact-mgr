import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // have one variable to hold cartItems -- an array
  private curentCartItems: any[] = [
    {
      id: 2,
      name: 'Butter',
      category: 'Dairy',
      price: '$10'
    }
  ];

  // Step1: create BeBehaviorSubject with default value for making it observable
  private cartItemsList = new BehaviorSubject<any[]>(this.curentCartItems);

  // Step2: Make the cartItemList as Observable
  // Create Observable for the above BahaviorSubject
  // so that any component can subscribe to it.
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable(); // latest Cart items will be subscribable

  constructor() { }

  updateCart(product: any): void {
    // send the above product to the backend to get it saved within cart.
    // handle success and error
    // if success do the following
    // keep the exisiting items and add one more into it
    this.latestCartItems.pipe(take(1)).subscribe(val => {
      const newArr = [...val, product]; // spread operator
      this.cartItemsList.next(newArr);
    });
  }

}
