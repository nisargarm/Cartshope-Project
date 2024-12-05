import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { DataStorageService } from '../service/data-storage.service';
import { WishlinkService } from '../wishlink.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getData: GetDataService, private dataStorage: DataStorageService,
    private wishlinkService: WishlinkService,
    private router: Router) { }

  getParamValue: any;
  getProductDetails: any;
  storeCartData: any = [];
  inCart: boolean = false;
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

    var getVal = this.dataStorage.getCartData()

    this.storeCartData = getVal ? getVal : [];

    this.getData.productData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.getProductDetails = ele;
      }
    });

    this.storeCartData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.inCart = true;
      }
    });
  }

  addCart(data: any) {
    data['plusMinusCounter'] = 1;
    this.storeCartData.push(data);
    this.dataStorage.storeCartData(this.storeCartData);
    this.router.navigate(['/cart']);
  }
  addToWishlink() {
    this.wishlinkService.addProduct(this.getProductDetails); // Add product to wishlist
  }

}
