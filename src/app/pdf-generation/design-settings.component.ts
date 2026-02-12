import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-design-settings',
  standalone: true, // MUST BE TRUE
  imports: [CommonModule, FormsModule], // MUST INCLUDE THESE
  templateUrl: './design-settings.component.html',
  styleUrls: ['./design-settings.component.css']
})
export class DesignSettingsComponent {
  @Input() config: any;
  @Input() fonts: string[] = [];
  @Input() layouts: any[] = [];
  @Output() configChanged = new EventEmitter<void>();

  onChange() {
    this.configChanged.emit();
  }
}
