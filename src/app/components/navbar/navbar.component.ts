import { Component, AfterContentChecked } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterContentChecked {
  keyAfterContentChecked = true;

  constructor() { }

  ngAfterContentChecked() {
    const path = window.location.pathname.split('/')[1];
    if (this.keyAfterContentChecked) {
      if (window.innerWidth > 740) {
        document.getElementById('desktop-' + path).classList.add('uk-active');
      } else {
        document.getElementById('mobile-' + path).classList.add('uk-active');
      }
      this.keyAfterContentChecked = false;
    }
  }

  changePath(path: string) {
    window.location.href = window.location.origin + '/' + path;
  }

  redirect(url: string) {
    if (url !== 'http://clubalianzastgo.web.app/') {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  }
}
