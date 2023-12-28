import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getRandomRGBColor } from '../../randomColor';
import { DefaultChildComponent } from '../default-child/default-child.component';
import { ColorDirective } from '../directives/color.directive';
import { EventClickChildComponent } from '../event-click-child/event-click-child.component';
import { InputPropertyChildComponent } from '../input-property-child/input-property-child.component';
import { ObservableChildComponent } from '../observable-child/observable-child.component';
import { OnPushChildComponent } from '../onpush-child/onpush-child.component';
import { OnPushChild2Component } from '../onpush-child2/onpush-child2.component';

@Component({
  selector: 'app-onpush-parent',
  standalone: true,
  imports: [OnPushChildComponent, OnPushChild2Component, DefaultChildComponent, ObservableChildComponent, EventClickChildComponent, ColorDirective,
  InputPropertyChildComponent],
  template: `
    <div class="parent" appColor>
      <p>Parent component (OnPush) called: {{ getCalled() }}</p>
      <div class="flex">
        <app-onpush-child />
        <app-on-push-child2 />
        <app-observable-child />
        <app-event-click-child />
        <app-input-property-child [data]="called" />
        <app-default-child />
      </div>
    </div>
  `,
  styles: `
    div.flex {
      display: flex;
      flex-wrap: wrap;
    }

    div.flex > * {
      flex-basis: calc((100% - 0.5rem * 2 - 1rem * 4 - 4 * 1px) / 2);
      flex-grow: 1;
      height: 160px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushParentComponent {
  called = 0;

  getCalled() {
    this.called = this.called + 1;

    return this.called;
  }
}
