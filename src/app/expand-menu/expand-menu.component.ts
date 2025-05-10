import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



export interface TreeNode {
  children?: TreeNode[];
  icon?: string;
  label: string;
  link?: string;
}

@Component({
  selector: 'app-expand-menu',
  imports: [MatExpansionModule, MatIconModule, MatListModule, CommonModule, MatCardModule],
  templateUrl: './expand-menu.component.html',
  styleUrl: './expand-menu.component.scss',
})
export class ExpandMenuComponent {
  // menuGroups: TreeNode[] = [
  //   {
  //     label: 'Data collection',
  //     icon: 'folder_open',
  //     children: [
  //       { label: 'Checkbox', icon: 'check_box' },
  //       { label: 'Date', icon: 'today' },
  //       { label: 'Date & Time', icon: 'schedule' },
  //       { label: 'Dropdown', icon: 'arrow_drop_down_circle' },
  //       { label: 'Number', icon: 'dialpad' },
  //       { label: 'Number & Date', icon: 'event' },
  //       { label: 'Radio button', icon: 'radio_button_checked' },
  //       { label: 'Year', icon: 'calendar_today' },
  //       { label: 'Slider', icon: 'tune' },
  //       { label: 'Text', icon: 'text_fields' },
  //       { label: 'Text (multiline)', icon: 'notes' },
  //     ]
  //   },
  //   {
  //     label: 'Dynamic',
  //     icon: 'autorenew',
  //     children: [
  //       { label: 'Calculation', icon: 'calculate' },
  //       { label: 'Link', icon: 'link' },
  //       { label: 'QR code', icon: 'qr_code' },
  //       { label: 'Summary', icon: 'summarize' },
  //     ]
  //   },
  //   {
  //     label: 'Structural',
  //     icon: 'grid_view',
  //     children: [
  //       { label: 'Grid', icon: 'grid_on' },
  //       { label: 'Image', icon: 'image' },
  //       { label: 'Remark', icon: 'comment' },
  //       { label: 'Upload file', icon: 'cloud_upload' },
  //     ]
  //   },
  //   {
  //     label: 'Other',
  //     icon: 'more_horiz',
  //     children: [
  //       { label: 'Import survey', icon: 'file_upload' },
  //       { label: 'Add survey button', icon: 'add_circle' },
  //       { label: 'Randomisation', icon: 'casino' },
  //       { label: 'Repeated measure', icon: 'repeat' },
  //       { label: 'Repeated data button', icon: 'repeat_one' },
  //     ]
  //   },
  // ];

  menuGroups: TreeNode[] = [
    {
      label: 'Data collection',
      children: [
        {
          label: 'Checkbox',
          icon: 'check_box'
        },
        {
          label: 'Date',
          icon: 'calendar_month'
        },
        {
          label: 'Date & Time',
          icon: 'calendar_clock'
        },
        {
          label: 'Dropdown',
          icon: 'arrow_drop_down_circle'
        },
        {
          label: 'Number',
          icon: 'pin'
        },
        {
          label: 'Number & Date',
          icon: 'stars'
        },
        {
          label: 'Radio button',
          icon: 'radio_button_checked'
        },
        {
          label: 'Year',
          icon: 'scoreboard'
        },
        {
          label: 'Slider',
          icon: 'linear_scale'
        },
        {
          label: 'Text',
          icon: 'featured_play_list'
        },
        {
          label: 'Text (multiline)',
          icon: 'text_ad'
        },

      ],
    },
    {
      label: 'Dynamic',
      children: [
        {
          label: 'Calculation',
          icon: 'calculate'
        },
        {
          label: 'Link',
          icon: 'add_link'
        },
        {
          label: 'QR code',
          icon: 'qr_code_2'
        },
        {
          label: 'Summary',
          icon: 'add_notes'
        },
      ],
    },
    {
      label: 'Survey',
      link: 'participant',
      children: [
        {
          label: 'Visit',
          link: 'visit',
          icon: 'home'
        }
      ],
    },
    {
      label: 'Survey package',
      link: 'survey-package',
    },
  ];
}
