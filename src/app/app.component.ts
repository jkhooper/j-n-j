import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ready: boolean = false;
  pdfSrc: string = '/j-n-j/assets/jj23-t.pdf';

  constructor() { }

  ngOnInit() {
    // set theme
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('x-app-theme');

    setTimeout(() => {
      this.ready = true;
    }, 1000);
  }
}
