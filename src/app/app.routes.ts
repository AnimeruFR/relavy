import { Routes } from '@angular/router';
import { CustomerPortfolio } from './menu/customer-portfolio/customer-portfolio';
import { Main } from './main/main';
import { CustomerMenu } from './customers/customer-menu/customer-menu';

export const routes: Routes = [
    {
        path: '',
        component: Main, 
        data: { pageName: 'Menu' }
    },
    {
        path: 'Customers',
        component: CustomerPortfolio, 
        data: { pageName: 'Customer Portfolio' }
    },
    {
        path: 'test',
        component: CustomerPortfolio, 
        data: { pageName: 'Customer Portfolio' }
    },
    {
        path: 'customers/:id',
        component: CustomerMenu,
        data: { pageName: 'Customer Menu' }
    }
];
