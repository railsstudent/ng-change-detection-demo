import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { GrandparentComponent } from './change-detection/grandparent/grandparent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GrandparentComponent],
  template: '<app-grandparent />',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  cdr = inject(ChangeDetectorRef);
}
