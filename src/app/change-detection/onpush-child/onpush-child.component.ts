import { ApplicationRef, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, Injector, NgZone, OnInit, runInInjectionContext, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { AppComponent } from '../../app.component';
import { ColorDirective } from '../directives/color.directive';

@Component({
  selector: 'app-onpush-child',
  standalone: true,
  imports: [ColorDirective],
  template: `
    <div class="child" appColor>
      <p>
        Child Component (OnPush + Signal + LCD with runOutsideAngular) called {{ getCalled() }}
      </p>
      <div>
        <button #btn>Click me</button>&nbsp;
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
export class OnPushChildComponent implements OnInit {
  @ViewChild('btn', { static: true, read: ElementRef<HTMLButtonElement> })
  btn!: ElementRef<HTMLButtonElement>;

  ngZone = inject(NgZone);
  appRef = inject(ApplicationRef);
  injector = inject(Injector);
  destroy$ = inject(DestroyRef);
  app = inject(AppComponent);

  count = signal(1);
  called = 0;
  
  ngOnInit(): void {
    console.log(this.btn.nativeElement);
   runInInjectionContext(this.injector, () => {
      this.ngZone.runOutsideAngular(() => {
        fromEvent(this.btn.nativeElement, 'click')
          .pipe(takeUntilDestroyed(this.destroy$))
          .subscribe(() => {
            this.count.update((v) => v + 1);
            this.app.cdr.markForCheck();
            this.appRef.tick();
          });
      });
    });
  }

  getCalled() {
    this.called = this.called + 1;

    return this.called;
  }
}