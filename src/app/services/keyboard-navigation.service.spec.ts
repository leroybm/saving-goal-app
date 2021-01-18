import { TestBed } from '@angular/core/testing';

import { KeyboardNavigationService } from './keyboard-navigation.service';

describe('KeyboardNavigationService', () => {
  let service: KeyboardNavigationService;
  let sub;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardNavigationService);
  });

  afterEach(() => sub && sub.unsubscribe());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listen to the right arrow input', () => {
    let navigated = false;
    sub = service.onNavigateRight().subscribe(() => navigated = true);
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowRight'
    });
    window.document.dispatchEvent(event);
    expect(navigated).toBeTrue();
  });

  it('should listen to the left arrow input', () => {
    let navigated = false;
    sub = service.onNavigateLeft().subscribe(() => navigated = true);
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowLeft'
    });
    window.document.dispatchEvent(event);
    expect(navigated).toBeTrue();
  });

  it('should listen to the enter key input', () => {
    let navigated = false;
    sub = service.onNavigationSend().subscribe(() => navigated = true);
    const event = new KeyboardEvent('keydown', {
      key: 'Enter'
    });
    window.document.dispatchEvent(event);
    expect(navigated).toBeTrue();
  });
});
