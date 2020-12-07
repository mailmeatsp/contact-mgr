import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItemCount = 0;
  constructor(private router: Router, private cartDatService: CartDataService) { }

  ngOnInit(): void {
    this.cartDatService.latestCartItems.subscribe((cartItems: any[]) => {
      if (cartItems && cartItems.length > 0) {
        this.cartItemCount = cartItems.length;
      }
    });
  }

  gotoCartHandler(): void {
    this.router.navigateByUrl('/products/cart');
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
