import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { GrandparentComponent } from './change-detection/grandparent/grandparent.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GrandparentComponent],
  template: '<app-grandparent />',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('Angular 17 change detection demo');
  }
  
  cdr = inject(ChangeDetectorRef);
}
