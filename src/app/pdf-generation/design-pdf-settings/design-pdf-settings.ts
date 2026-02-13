import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-design-pdf-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './design-pdf-settings.html',
  styleUrls: ['./design-pdf-settings.css']
})
export class DesignPdfSettingsComponent {
  @Input() config: any;
  @Input() fonts: string[] = [];
  @Input() layouts: any[] = [];
  @Output() configChanged = new EventEmitter<void>();

  onChange() {
    this.configChanged.emit();
  }
}
