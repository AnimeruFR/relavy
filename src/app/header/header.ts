import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  protected selectedMenu = 'test';

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
    const target = event?.target as HTMLElement;
    document.querySelectorAll('.header div').forEach(el => el.classList.remove('selected'));
    target?.parentElement?.classList.toggle('selected');
  }
}
