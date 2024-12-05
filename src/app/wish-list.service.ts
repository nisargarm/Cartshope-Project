import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private wishList: any[] = [];
  constructor() { }
  addToWishList(product: any) {
    this.wishList.push(product);
  }
  getWishList() {
    return this.wishList;
  }
  removeFromWishList(product: any) {
    this.wishList = this.wishList.filter(item => item !== product);
  }

}
