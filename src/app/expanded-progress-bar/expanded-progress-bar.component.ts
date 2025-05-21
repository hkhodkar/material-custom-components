import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-expanded-progress-bar',
  imports: [
    NgFor,
    NgIf,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
  ],
  templateUrl: './expanded-progress-bar.component.html',
  styleUrl: './expanded-progress-bar.component.scss',
})
export class ExpandedProgressBarComponent {
  @Input() title!: string;
  @Input() progress = 30; // default full
  @Input() rows: {
    label: string;
    tags: string[];
    repeating?: boolean;
  }[] = [];
}
