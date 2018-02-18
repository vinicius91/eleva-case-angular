import { Component, OnInit, NgZone } from '@angular/core';
import { MediaQueryList } from '@angular/flex-layout';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);


  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
   }

  ngOnInit() {
  }

  isScreenSmall(): boolean{
    return this.mediaMatcher.matches;
  }
}
