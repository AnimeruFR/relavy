import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customers/customer-service';

@Component({
  selector: 'app-customer-portfolio',
  imports: [RouterLink],
  templateUrl: './customer-portfolio.html',
  styleUrl: './customer-portfolio.scss'
})
export class CustomerPortfolio {
  constructor(private customerService: CustomerService) {}

  getCustomers() {
    return this.customerService.getCustomers();
  }
}
