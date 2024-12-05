import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  orderId: string = '';   

  feedback: any = {
    rating: 'ss',
    comment: ''
  };
  paymentMethod: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
    });
  }

  onSubmit() {
     
    console.log('Feedback Submitted:', this.feedback);
    alert("Thank You")

     
    this.router.navigate(['/']);
  }
  orderClick() {
    console.log('Selected payment method:', this.paymentMethod);
    if (this.paymentMethod === 'COD') {
      console.log('Order placed with Cash on Delivery');
    } else if (this.paymentMethod === 'UPI') {
      console.log('Order placed with UPI Payment');
    } else if (this.paymentMethod === 'NetBanking') {
      console.log('Order placed with Net Banking');
    }
     
  }
  
}




