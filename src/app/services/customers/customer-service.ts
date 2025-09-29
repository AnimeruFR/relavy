import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomers() {
    return [
      { id: 1, name: 'Customer A', description: 'Description for Customer A', email: 'customerA@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
      { id: 3, name: 'Customer C', description: 'Description for Customer C', email: 'customerC@example.com', phone: '345-678-9012', address: '345 Main St, City, Country' },
      { id: 1, name: 'Customer A', description: 'Description for Customer A', email: 'customerA@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
      { id: 1, name: 'Customer A', description: 'Description for Customer A', email: 'customerA@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
      { id: 3, name: 'Customer C', description: 'Description for Customer C', email: 'customerC@example.com', phone: '345-678-9012', address: '345 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
      { id: 1, name: 'Customer A', description: 'Description for Customer A', email: 'customerA@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
      { id: 1, name: 'Customer A', description: 'Description for Customer A', email: 'customerA@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
      { id: 1, name: 'Customer A', description: 'Description for Customer A', email: 'customerA@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' },
      { id: 2, name: 'Customer B', description: 'Description for Customer B', email: 'customerB@example.com', phone: '234-567-8901', address: '234 Main St, City, Country' },
    ];
  }

  getCustomer(id: number) {
    const customers = this.getCustomers();
    return customers.find(customer => customer.id === id);
  }
}
