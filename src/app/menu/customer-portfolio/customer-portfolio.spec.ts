import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortfolio } from './customer-portfolio';

describe('CustomerPortfolio', () => {
  let component: CustomerPortfolio;
  let fixture: ComponentFixture<CustomerPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
