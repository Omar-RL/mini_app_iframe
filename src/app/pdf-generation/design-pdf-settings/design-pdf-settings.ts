import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PdfDesignConfig {
  useGradient: boolean;
  color1: string;
  color2: string;

  titleColor: string;
  titleFontSize: number;
  titleFontFamily: string;

  textColor: string;
  descFontSize: number;
  descFontFamily: string;
}

@Component({
  selector: 'pdf-design-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './design-pdf-settings.html',
  styleUrls: ['./design-pdf-settings.css']
})
export class PdfDesignSettingsComponent {

  @Input() config!: PdfDesignConfig;

  @Input() fonts: string[] = [];

  @Output() configChanged = new EventEmitter<PdfDesignConfig>();

  onChange() {
    this.configChanged.emit(this.config);
  }
}
