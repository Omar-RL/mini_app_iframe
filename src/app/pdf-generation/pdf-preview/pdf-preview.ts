import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PdfDesignConfig } from '../design-pdf-settings/design-pdf-settings';

@Component({
  selector: 'pdf-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-preview.html',
  styleUrls: ['./pdf-preview.css']
})
export class PdfPreviewComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('message', (event) => {
        if (event.data?.type === 'UPDATE_DESIGN') {
          this.updateDesign(event.data.payload);
        }
      });
    }
  }

  updateDesign(data: PdfDesignConfig & { eventName?: string; eventData?: string }) {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = document.querySelector('.slide-container') as HTMLElement;

    if (container) {
      if (data.useGradient) {
        container.style.background = `linear-gradient(135deg, ${data.color1}, ${data.color2})`;
      } else {
        container.style.background = data.color1;
      }
    }

    const titleEl = document.getElementById('title');
    if (titleEl && data.eventName) {
      titleEl.textContent = data.eventName.toUpperCase();
      titleEl.style.color = data.titleColor;
      titleEl.style.fontSize = data.titleFontSize + 'px';
      titleEl.style.fontFamily = `"${data.titleFontFamily}", sans-serif`;
    }

    const descEl = document.getElementById('description');
    if (descEl && data.eventData) {
      descEl.textContent = data.eventData;
      descEl.style.color = data.textColor;
      descEl.style.fontSize = data.descFontSize + 'px';
      descEl.style.fontFamily = `"${data.descFontFamily}", sans-serif`;
    }
  }
}
