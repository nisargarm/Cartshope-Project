import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  orderId: string = '';
  orderPlaced: boolean = false;
  paymentMethod: string = 'COD';  
  getCartData: any;
  storeCartArry: any = [];
  totalAmount: number = 0;
  totalCart: number = 0;

  constructor(private dataStorage: DataStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData ? this.getCartData.length : 0;
    if (this.getCartData) {
      this.getCartData.filter((ele: any) => {
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
    }
  }


  setPaymentMethod(method: string) {
    this.paymentMethod = method;
  }


  removeCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem('cart-data');
    this.storeCartArry = [];
    this.getCartData.filter((ele: any) => {
      if (ele.pdId != data.pdId) {
        this.storeCartArry.push(ele);
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      }
    });
    this.dataStorage.storeCartData(this.storeCartArry);
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData.length;
  }


  plusMinusCount(data: any, type: string) {
    this.storeCartArry = [];
    let plusMinusValue = data.plusMinusCounter;
    this.totalAmount = 0;

    if (type === 'minus') {
      let minusCount = plusMinusValue - 1;
      this.getCartData.filter((ele: any) => {
        if (data.pdId === ele.pdId) {
          ele['plusMinusCounter'] = minusCount;
        }
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
    }

    if (type === 'plus') {
      let plusCount = plusMinusValue + 1;
      this.getCartData.filter((ele: any) => {
        if (data.pdId === ele.pdId) {
          ele['plusMinusCounter'] = plusCount;
        }
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
    }

    this.storeCartArry = this.getCartData;
    this.dataStorage.storeCartData(this.storeCartArry);
    this.getCartData = this.dataStorage.getCartData();
  }
  orderClick() {
    this.orderId = Math.random().toString(36).substring(2, 15);  
    this.orderPlaced = true;

    if (this.paymentMethod === 'COD') {
      console.log('Order placed with Cash on Delivery');
    } else if (this.paymentMethod === 'Online') {
      console.log('Order placed with Online Payment');

    } else if (this.paymentMethod === 'NetBanking') {
      console.log('Order placed with Net Banking');

    }
    alert('Order Placed Successfully');
    localStorage.removeItem('cart-data');
    this.router.navigate(['/feedback'], { queryParams: { orderId: this.orderId } });
  }
}
