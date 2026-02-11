import { bootstrapApplication } from '@angular/platform-browser';
import { PdfGenerationComponent } from './app/pdf-generation/pdf-generation.component';

bootstrapApplication(PdfGenerationComponent)
  .catch(err => console.error(err));
