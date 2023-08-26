import { Component, Inject, inject } from '@angular/core';
import { Vehicle, CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cartService =  inject(CartService);

  title = 'CppoApp';

  // render list of vehicles
  vehicles = [
    {
      id: 1,
      name: 'Toyota',
      price: 10000,
    },
    {
      id: 2,
      name: 'Honda',
      price: 20000,
    },
    {
      id: 3,
      name: 'Ford',
      price: 30000,
    },
    {
      id: 4,
      name: 'Chevy',
      price: 40000,
    },
    {
      id: 5,
      name: 'Tesla',
      price: 50000,
    },
  ];


  addToCart(id: number) {
    console.log(id);
    const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);
    if(vehicle) {
      this.cartService.addToCart(vehicle);
    }
  }
}
