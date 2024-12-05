import { Component, OnInit } from '@angular/core';
import { WishlinkService } from '../wishlink.service';

@Component({
  selector: 'app-wishlink',
  templateUrl: './wishlink.component.html',
  styleUrls: ['./wishlink.component.css']
})
export class WishlinkComponent implements OnInit {
  wishlistedProducts: any;

  constructor(private wishlinkService: WishlinkService) {}

  ngOnInit(): void {
    this.loadWishlistedProducts();
  }
  loadWishlistedProducts() {
    this.wishlistedProducts = this.wishlinkService.getProducts();
  }
  removeFromWishlist(productId: number): void {
    this.wishlinkService.removeProduct(productId);
    const index = this.wishlistedProducts.findIndex((product: { pdId: number; }) => product.pdId === productId);

    if (index !== -1) {
        
        this.wishlistedProducts.splice(index, 1);
    }
      this.wishlistedProducts();  
  
   }
}
