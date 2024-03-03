import { Component, Input } from '@angular/core';
import { AppLogoComponent } from './app-logo.component';

@Component({
  selector: 'spartan-th-item',
  standalone: true,
  imports: [AppLogoComponent],
  host: {
    class: 'inline-flex flex-col justify-center items-center',
  },
  template: `
    <app-logo class="bg-primary h-9 w-9 -rotate-90 rounded-full p-1" />
    <a
      class="mt-1 inline-block whitespace-nowrap text-[.55rem] font-medium hover:underline"
      [href]="href"
      target="_blank"
    >
      <ng-content />
    </a>
  `,
})
export class ThreeHundredItemComponent {
  @Input()
  href = '';
}
