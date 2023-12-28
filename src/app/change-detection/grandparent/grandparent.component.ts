import { Component } from '@angular/core';
import { DefaultParent2Component } from '../default-parent2/default-parent2.component';
import { ColorDirective } from '../directives/color.directive';
import { OnPushParentComponent } from '../onpush-parent/onpush-parent.component';

@Component({
  selector: 'app-grandparent',
  standalone: true,
  imports: [OnPushParentComponent, DefaultParent2Component, ColorDirective],
  template: `
    <div appColor class="grand-parent">
      <p>Grandparent component (Default) called: {{ getCalled() }}</p>
      <app-onpush-parent />
      <app-default-parent2 />
    </div>`,
  styles: `
    div {
      margin: 0.5rem;
      border: 1px solid blue;
    }
  `,
})
export class GrandparentComponent {
  called = 0;

  getCalled() {
    this.called = this.called + 1;

    return this.called;
  }
}