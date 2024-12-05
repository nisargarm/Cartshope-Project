import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor() { }
    storeCartData(data:any)
  {
      let cartData = JSON.stringify(data);
      localStorage.setItem('cart-data',cartData);
  }
   getCartData()
  {
    let getData:any = localStorage.getItem('cart-data');
    return JSON.parse(getData);
  }
}
