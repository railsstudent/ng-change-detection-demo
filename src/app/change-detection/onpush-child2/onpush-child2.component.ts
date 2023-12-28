import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-on-push-child2',
  standalone: true,
  imports: [ColorDirective],
  template: `
    <div class="child" appColor>
      <p>
        Child2 Component (OnPush + Signal) called {{ this.getCalled() }}
      </p>
      <div>
        <button (click)="increment();">Click me</button>&nbsp;
        <span>Signal: {{ count() }}</span>
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
export class OnPushChild2Component {
  count = signal(1);
  called = 0;
  
  increment() {
    this.count.update((v) => v + 1);
  }

  getCalled() {
    this.called = this.called + 1;
    return this.called;
  }
}