import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DesignSettingsComponent } from './design-settings.component';

@Component({
  selector: 'app-pdf-generation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DesignSettingsComponent
  ],
  templateUrl: './pdf-generation.component.html',
  styleUrl: './pdf-generation.component.css'
})
export class PdfGenerationComponent {
  showModal: boolean = false;
  @ViewChild('myIframe') iframe!: ElementRef;

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

  simulateEvent() {
    if (!this.iframe) return;
    const iframeWindow = this.iframe.nativeElement.contentWindow;
    iframeWindow.postMessage({
      type: 'UPDATE_DESIGN',
      payload: { ...this.formData }
    }, '*');
  }
}
