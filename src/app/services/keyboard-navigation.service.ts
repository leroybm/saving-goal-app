import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardNavigationService implements OnDestroy {

  private keyboardSubject = new Subject<string>();

  constructor() {
    window.document.addEventListener('keydown', event => {
      this.keyboardSubject.next(event.key);
    });
  }

  ngOnDestroy() {
    this.keyboardSubject.complete();
  }

  /**
   * Fires an observable event when the user wants to navigate to the left
   */
  public onNavigateLeft(): Observable<void> {
    const navigateLeftSubject = new Subject<void>();

    this.keyboardSubject.subscribe(next => {
      if (next === 'ArrowLeft') { navigateLeftSubject.next(); }
    });

    return navigateLeftSubject.asObservable();
  }

  /**
   * Fires an observable event when the user wants to navigate to the right
   */
  public onNavigateRight(): Observable<void> {
    const navigateRightSubject = new Subject<void>();

    this.keyboardSubject.subscribe(next => {
      if (next === 'ArrowRight') { navigateRightSubject.next(); }
    });

    return navigateRightSubject.asObservable();
  }

  /**
   * Fires an observable event when the user wants to send a form
   */
  public onNavigationSend(): Observable<void> {
    const navigateSendSubject = new Subject<void>();

    this.keyboardSubject.subscribe(next => {
      if (next === 'Enter') { navigateSendSubject.next(); }
    });

    return navigateSendSubject.asObservable();
  }
}
