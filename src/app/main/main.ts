import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, RouterOutlet, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  constructor(public router: Router) {}

  test() {
    console.log(this.router.lastSuccessfulNavigation);
  }
}
