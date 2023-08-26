import { Injectable, computed, signal } from '@angular/core';

export interface CartItemArray {
  vehicle: Vehicle;
  quantity: number;
}

//render Vehicle interface
export interface Vehicle {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItems = signal<CartItemArray[]>([]);

  cartTotal = signal(0);

  subTotalPriceForEachitem = computed(() => {
    return this.cartItems().reduce((a, item) => {
      console.log("a", a);
      return (item.vehicle.price * item.quantity);
    }, 0);
  });

  tax = computed(() => {
    return Math.round(Number(this.subTotalPriceForEachitem()) * 10.75);
  });

  totalPrice = computed(() => {
    this.subTotalPriceForEachitem() + this.tax();
  });

  addToCart(vehicle: Vehicle) {
    this.cartItems.mutate((items) => {
        items.push({vehicle, quantity: 1});
    });
  }

  removeFromCart(vehicle: Vehicle) {
    this.cartItems.update((items) => items.filter((item) => item.vehicle.id !== vehicle.id));
    
  }

  constructor() {}
}
