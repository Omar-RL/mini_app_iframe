import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pdf-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css']
})
export class PdfPreviewComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only execute in browser
    if (isPlatformBrowser(this.platformId)) {
      console.log('PDF Preview component loaded and ready');

      // Listen for messages from parent
      window.addEventListener('message', (event) => {
        console.log('Message received in preview component:', event.data);

        if (event.data.type === 'UPDATE_DESIGN') {
          this.updateDesign(event.data.payload);
        }
      });
    }
  }

  updateDesign(data: any) {
    // Only execute in browser
    if (isPlatformBrowser(this.platformId)) {
      console.log('Updating design with:', data);

      // Update background
      if (data.useGradient) {
        document.body.style.background = `linear-gradient(135deg, ${data.color1}, ${data.color2})`;
      } else {
        document.body.style.background = data.color1;
      }

      // Update title
      const titleEl = document.getElementById('title');
      if (titleEl && data.eventName !== undefined) {
        titleEl.textContent = data.eventName.toUpperCase();
        titleEl.style.color = data.titleColor || '#000000';
        titleEl.style.fontSize = (data.titleFontSize || 80) + 'px';

        let titleFont = data.titleFontFamily || 'Arial';
        titleEl.style.fontFamily = `"${titleFont}", sans-serif`;

        console.log('Title font set to:', titleFont);
      }

      // Update description
      const descEl = document.getElementById('description');
      if (descEl && data.eventData !== undefined) {
        descEl.textContent = data.eventData;
        descEl.style.color = data.textColor || '#333333';
        descEl.style.fontSize = (data.descFontSize || 24) + 'px';

        let descFont = data.descFontFamily || 'Arial';
        descEl.style.fontFamily = `"${descFont}", sans-serif`;

        console.log('Description font set to:', descFont);
      }
    }
  }

  onPrevious() {
    console.log('Previous slide');
  }

  onNext() {
    console.log('Next slide');
  }
}
