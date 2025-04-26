// base-control-value-accessor.ts
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { inject, Optional, Self } from '@angular/core';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {
  protected _value!: T;
  protected disabled = false;
  protected onChange: (value: T) => void = () => {};
  protected onTouched: () => void = () => {};
  ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control() {
    return this.ngControl?.control as FormControl;
  }

  writeValue(obj: T): void {
    this._value = obj;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
