import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfDesignSettingsComponent } from '../design-pdf-settings/design-pdf-settings';
import { PdfPreviewComponent } from '../pdf-preview/pdf-preview';
import { PdfDesignConfig } from '../design-pdf-settings/design-pdf-settings';

@Component({
  selector: 'simulate-pdf-generator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PdfDesignSettingsComponent,
    PdfPreviewComponent
  ],
  templateUrl: './simulate-pdf-generator.html',
  styleUrls: ['./simulate-pdf-generator.css']
})
export class SimulatePdfGeneratorComponent implements AfterViewInit {

  showModal = false;

  fonts = ['Arial', 'Verdana', 'Georgia', 'Montserrat', 'Roboto', 'Playfair Display'];

  formData: PdfDesignConfig & {
    eventName: string;
    eventData: string;
    selectedLayout: string;
  } = {
    eventName: 'Example Title',
    eventData: 'This is the description that appears on slide.',
    useGradient: false,
    color1: '#ffffff',
    color2: '#3b82f6',
    titleColor: '#000000',
    titleFontSize: 80,
    titleFontFamily: 'Arial',
    textColor: '#333333',
    descFontSize: 24,
    descFontFamily: 'Arial',
    selectedLayout: 'centered'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.simulateEvent(), 100);
    }
  }

  simulateEvent() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.postMessage({
      type: 'UPDATE_DESIGN',
      payload: { ...this.formData }
    }, '*');
  }
}
