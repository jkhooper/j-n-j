import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ekbf-ui';

  ngOnInit() {
    // set theme
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('x-app-theme');
  }
}
