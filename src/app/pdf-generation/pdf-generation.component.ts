import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DesignPdfSettingsComponent } from '../design-pdf-settings/design-pdf-settings';
import { PdfPreviewComponent } from '../pdf-preview/pdf-preview';

@Component({
  selector: 'app-simulate-pdf-generator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DesignPdfSettingsComponent,
    PdfPreviewComponent
  ],
  templateUrl: './simulate-pdf-generator.html',
  styleUrl: './simulate-pdf-generator.css'
})
export class PdfGenerationComponent implements AfterViewInit {
  showModal: boolean = false;

  fonts = ['Arial', 'Verdana', 'Georgia', 'Montserrat', 'Roboto', 'Playfair Display'];

  layouts = [
    { id: 'centered', label: 'Centered' },
    { id: 'top-left', label: 'Top Left' },
    { id: 'bottom-right', label: 'Bottom Right' },
    { id: 'magazine', label: 'Magazine' }
  ];

  formData = {
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
    // Only execute in browser
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.simulateEvent();
      }, 100);
    }
  }

  simulateEvent() {
    // Only execute in browser
    if (isPlatformBrowser(this.platformId)) {
      console.log('Simulating event with data:', this.formData);

      window.postMessage({
        type: 'UPDATE_DESIGN',
        payload: { ...this.formData }
      }, '*');
    }
  }
}
