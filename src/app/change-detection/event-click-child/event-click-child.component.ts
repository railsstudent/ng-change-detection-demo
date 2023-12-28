import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-event-click-child',
  standalone: true,
  imports: [ColorDirective],
  template: `
    <div class="child" appColor>
      <p>
        Event click Component (OnPush + variable) called {{ getCalled() }}
      </p>
      <div>
        <button (click)="increment()">Click me</button>&nbsp;
        <span>Count: {{ count }}</span>
      </div>
    </div>
  `,
  styles: `
    div {
      margin-top: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventClickChildComponent {
  called = 0;
  count = 1;

  increment() {
    this.count = this.count + 1;
  }

  getCalled() {
    this.called = this.called + 1;

    return this.called;
  }
}