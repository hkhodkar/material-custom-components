import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';

interface MenuItem {
  label: string;
  icon: string;
}

interface MenuGroup {
  label: string;
  icon: string;
  submenuId: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu-panel',
  imports: [ MatMenuModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './menu-anel.component.html',
  styleUrl: './menu-anel.component.scss',
})
export class MenuAnelComponent {
  menuGroups: MenuGroup[] = [
    {
      label: 'Data collection',
      icon: 'folder_open',
      submenuId: 'dataCollectionMenu',
      items: [
        { label: 'Checkbox', icon: 'check_box' },
        { label: 'Date', icon: 'today' },
        { label: 'Date & Time', icon: 'schedule' },
        { label: 'Dropdown', icon: 'arrow_drop_down_circle' },
        { label: 'Number', icon: 'dialpad' },
        { label: 'Number & Date', icon: 'event' },
        { label: 'Radio button', icon: 'radio_button_checked' },
        { label: 'Year', icon: 'calendar_today' },
        { label: 'Slider', icon: 'tune' },
        { label: 'Text', icon: 'text_fields' },
        { label: 'Text (multiline)', icon: 'notes' },
      ],
    },
    {
      label: 'Dynamic',
      icon: 'autorenew',
      submenuId: 'dynamicMenu',
      items: [
        { label: 'Calculation', icon: 'calculate' },
        { label: 'Link', icon: 'link' },
        { label: 'QR code', icon: 'qr_code' },
        { label: 'Summary', icon: 'summarize' },
      ],
    },
    {
      label: 'Structural',
      icon: 'grid_view',
      submenuId: 'structuralMenu',
      items: [
        { label: 'Grid', icon: 'grid_on' },
        { label: 'Image', icon: 'image' },
        { label: 'Remark', icon: 'comment' },
        { label: 'Upload file', icon: 'cloud_upload' },
      ],
    },
    {
      label: 'Other',
      icon: 'more_horiz',
      submenuId: 'otherMenu',
      items: [
        { label: 'Import survey', icon: 'file_upload' },
        { label: 'Add survey button', icon: 'add_circle' },
        { label: 'Randomisation', icon: 'casino' },
        { label: 'Repeated measure', icon: 'repeat' },
        { label: 'Repeated data button', icon: 'repeat_one' },
      ],
    },
  ];
}
