import { Routes } from '@angular/router';
import { CustomerPortfolio } from './menu/customer-portfolio/customer-portfolio';
import { Main } from './main/main';

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
    }
];
