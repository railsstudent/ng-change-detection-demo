import { Directive, ElementRef, inject } from '@angular/core';
import { take, timer } from 'rxjs';
import { getRandomRGBColor, resetColor } from '../../randomColor';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  isFirstPass: boolean = true;

  ngDoCheck(): void {
    const nativeElement = this.elementRef.nativeElement;
    if (this.isFirstPass) {
      nativeElement.style.backgroundColor = resetColor();
      this.isFirstPass = false;
      
      return;
    }

    nativeElement.style.backgroundColor = getRandomRGBColor();

    timer(700)
      .pipe(take(1))
      .subscribe(() =>
        nativeElement.style.backgroundColor = resetColor()
      );
  }

}