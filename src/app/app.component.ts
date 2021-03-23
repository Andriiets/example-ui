import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';

  const;
  logoURL =
    'https://raw.githubusercontent.com/fireflysemantics/logo/master/l1.svg';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry
      .addSvgIcon('i-bank',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/bank.svg'))
      .addSvgIcon('i-calendar',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/calendar.svg'));

  }

  ngOnInit(): void {

    // this.matIconRegistry.addSvgIcon(
    //   `i-bank`,
    //   `bank.svg`
    // );
  }
}
