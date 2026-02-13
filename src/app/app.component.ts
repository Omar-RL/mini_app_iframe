import { Component } from '@angular/core';
import { SimulatePdfGeneratorComponent } from './pdf-generation/simulate-pdf-generator/simulate-pdf-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimulatePdfGeneratorComponent],
  template: `<simulate-pdf-generator></simulate-pdf-generator>`
})
export class AppComponent {}
