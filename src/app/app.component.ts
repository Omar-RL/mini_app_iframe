import { Component } from '@angular/core';
import { PdfGenerationComponent } from './pdf-generation/pdf-generation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfGenerationComponent],
  template: `<app-pdf-generation></app-pdf-generation>`
})
export class AppComponent {}
