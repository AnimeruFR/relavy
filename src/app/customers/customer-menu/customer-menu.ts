import { Component } from '@angular/core';
import { CustomerService } from '../../services/customers/customer-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-menu',
  imports: [RouterLink],
  templateUrl: './customer-menu.html',
  styleUrl: './customer-menu.scss'
})
export class CustomerMenu {
  customer: any;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCustomer(id);
  }

  getCustomer(id: number) {
    this.customer = this.customerService.getCustomer(id);
  }
}
