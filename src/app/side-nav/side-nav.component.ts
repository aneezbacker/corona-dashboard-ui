import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {

  mediaQueryList: MediaQueryList;
  webshareApiPresent: boolean;


  shareNavigator: any = window.navigator;

  private mediaQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, mediaMatcher: MediaMatcher) {
    this.mediaQueryList = mediaMatcher.matchMedia('(max-width: 600px)');
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQueryList.addListener(this.mediaQueryListener);
  }


  ngOnInit(): void {
    this.webshareApiPresent = window.navigator && window.navigator['share'];
  }


  ngOnDestroy(): void {
    this.mediaQueryList.removeListener(this.mediaQueryListener);
    //   console.log('SideNavComponent::ngOnDestroy. shouldRun:' + shouldRun);
  }

  share(): void {
    if (this.webshareApiPresent) {
      window.navigator['share']({
        title: document.title,
        url: window.location.href
      }).then(() => {
      })
        .catch(console.error);
    } else {
    }
  }
}
