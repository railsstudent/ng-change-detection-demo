import { Component } from '@angular/core';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-default-parent2',
  standalone: true,
  imports: [ColorDirective],
  template: `
    <div class="parent" appColor>
      <p>Parent2 Component (Default) called: {{ getCalled() }}</p>
    </div>`,
  styles: ``,
})
export class DefaultParent2Component {
  called = 0;

  getCalled() {
    this.called = this.called + 1;

    return this.called;
  }
}