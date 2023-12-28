import { Component } from '@angular/core';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-default-child',
  standalone: true,
  imports: [ColorDirective],
  template: `
    <div class="child" appColor>
      <p>
        Child2 Component (Default) called {{ getCalled() }}
      </p>
      <div>
        <button (click)="increment();">Click me</button>&nbsp;
        <span>Count: {{ count }}</span>
      </div>

    </div>
  `,
  styles: `
    div {
      margin-top: 0.5rem;
    }
  `,
})
export class DefaultChildComponent {
  called = 0;
  count = 0;

  increment() {
    this.count = this.count + 1;
  }

  getCalled() {
    this.called = this.called + 1;
    
    return this.called;
  }
}