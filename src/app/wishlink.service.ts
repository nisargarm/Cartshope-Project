import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WishlinkService {
  private storageKey = 'wishlistedProducts';

  constructor() {
    this.loadWishlist();
  }
  private wishlistedProducts: any[] = [];

  addProduct(product: any) {
    this.wishlistedProducts.push(product);
    this.saveWishlist();
  }

  getProducts() {
    return this.wishlistedProducts;
  }
  removeProduct(productId: any) {
    this.wishlistedProducts = this.wishlistedProducts.filter(product => product.pdId !== productId); 
    this.saveWishlist();
  }
  private saveWishlist() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.wishlistedProducts));
  }

  private loadWishlist() {
    const storedProducts = localStorage.getItem(this.storageKey);
    this.wishlistedProducts = storedProducts ? JSON.parse(storedProducts) : [];
  }
}
