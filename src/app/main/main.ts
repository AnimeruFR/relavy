import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Router, RouterLink, RouterOutlet, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-main',
  imports: [Header, RouterOutlet, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  protected previousUrl: string | null = null;
  private readonly cookieName = 'relavy_previous_url';

  constructor(public router: Router) {
    this.previousUrl = this.getCookie(this.cookieName);

    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe(([previous, current]: [RoutesRecognized, RoutesRecognized]) => {
        this.previousUrl = previous.urlAfterRedirects;
        this.setCookie(this.cookieName, this.previousUrl, 1);
      });
  }

  goPreviousPage(): string | null {
    return this.previousUrl;
  }

  getPreviousPageName(): string | null {
    if (!this.previousUrl) return null;

    const route = this.router.config.find(r => `/${r.path}` === this.previousUrl);
    return route?.data?.['pageName'] ?? this.previousUrl;
  }

  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return match ? decodeURIComponent(match.pop()!) : null;
  }
}
