import {
  Component,
  Input,
  input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ButtonShape, ButtonColor, ButtonType } from '../models/button-type';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule, CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  label = input<string>();
  shape = input<ButtonShape>('rounded');
  color = input<ButtonColor>('primary');
  icon = input<string>();
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  @Output() onButtonClicked = new EventEmitter();
  onClick() {
    this.onButtonClicked.emit();
  }
}
