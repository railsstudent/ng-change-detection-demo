import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-input-property-child',
  standalone: true,
  imports: [ColorDirective],
  template: `
    <div class="child" appColor>
      <p>
        Input Property Child Component called {{ this.getCalled() }}
      </p>
      <div>
        <span>Called from parent: {{ data }}</span>
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
export class InputPropertyChildComponent {
  @Input({ required: true })
  data = 1;

  called = 0;
  
  getCalled() {
    this.called = this.called + 1;
    return this.called;
  }
}