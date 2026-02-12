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

  fonts = ['Arial', 'Verdana', 'Georgia', 'Montserrat', 'Roboto', 'Playfair Display'];

  layouts = [
    { id: 'centered', label: 'Centered' },
    { id: 'top-left', label: 'Top Left' },
    { id: 'bottom-right', label: 'Bottom Right' },
    { id: 'magazine', label: 'Magazine' }
  ];

  formData = {
    eventName: 'Your Amazing Title',
    eventData: 'This is the description that appears on your slide.',
    useGradient: false,
    color1: '#ffffff',
    color2: '#3b82f6',
    textColor: '#000000',
    fontSize: 80,
    fontFamily: 'Arial',
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
