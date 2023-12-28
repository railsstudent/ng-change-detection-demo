import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, scan, startWith } from 'rxjs';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-observable-child',
  standalone: true,
  imports: [AsyncPipe, ColorDirective],
  template: `
    <div class="child" appColor>
      <p>
        Child3 Component (OnPush + Observable) called {{ getCalled() }}
      </p>
      <div>
        <button #btn>Click me</button>&nbsp;
        <span>Observable: {{ count$ | async }}</span>
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
export class ObservableChildComponent implements OnInit {
  @ViewChild('btn', { static: true, read: ElementRef<HTMLButtonElement>})
  btn!: ElementRef<HTMLButtonElement>;

  count$!: Observable<number>;
  called = 0;

  ngOnInit(): void {
    this.count$ = fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        map(() => 1),
        scan((acc, v: number) => acc + v, 1),
        startWith(1)
      );
  }

  getCalled() {
    this.called = this.called + 1;

    return this.called;
  }
}