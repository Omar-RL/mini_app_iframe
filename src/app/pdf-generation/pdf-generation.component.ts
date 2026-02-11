import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pdf-generation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pdf-generation.component.html',
  styleUrl: './pdf-generation.component.css'
})
export class PdfGenerationComponent {
  @ViewChild('myIframe') iframe!: ElementRef;

  // Define available design themes
  themes = [
    { id: 'default', label: 'DEFAULT', color: '#ffffff' },
    { id: 'blue', label: 'BLUE', color: '#dbeafe' },
    { id: 'red', label: 'RED', color: '#fee2e2' },
    { id: 'yellow', label: 'YELLOW', color: '#fef9c3' },
    { id: 'green', label: 'GREEN', color: '#dcfce7' }
  ];

  formData = {
    htmlContent: '',
    eventName: '',
    eventData: '',
    selectedTheme: 'default' // Default theme selection
  };

  /**
   * Sends the current form data and selected theme to the iframe
   * to update the preview in real-time.
   */
  simulateEvent() {
    if (!this.iframe) return;

    const iframeWindow = this.iframe.nativeElement.contentWindow;
    
    iframeWindow.postMessage({
      type: 'UPDATE_DESIGN',
      payload: {
        ...this.formData,
        // Ensure the current theme is explicitly sent
        selectedTheme: this.formData.selectedTheme 
      }
    }, '*');
  }
}