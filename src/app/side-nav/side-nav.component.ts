import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnDestroy {

  mediaQueryList: MediaQueryList;

//  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  shouldRun = true;

  private mediaQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, mediaMatcher: MediaMatcher) {
    this.mediaQueryList = mediaMatcher.matchMedia('(max-width: 600px)');
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQueryList.addListener(this.mediaQueryListener);
  }

  /*
  ngOnInit(): void {
    console.log('SideNavComponent::ngOnInit. shouldRun:' + shouldRun);
  }
  */

  ngOnDestroy(): void {
    this.mediaQueryList.removeListener(this.mediaQueryListener);
 //   console.log('SideNavComponent::ngOnDestroy. shouldRun:' + shouldRun);
  }




}
