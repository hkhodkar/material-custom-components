import { FocusMonitor } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable, Subject, Subscription, take } from 'rxjs';
import { FormGroupFromInterface } from '../models/angular-form.model';
import { ErrorStateMatcher } from '@angular/material/core';

export interface FormFieldValue {
  query: string;
  scope: string;
}

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return (control?.dirty || control?.touched) && control.invalid;
  }
}

@Component({
  selector: 'app-custom-form-field-control',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './custom-form-field-control.component.html',
  styleUrl: './custom-form-field-control.component.scss',
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: CustomFormFieldControlComponent,
    },
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorMatcher,
    },
  ],
})
export class CustomFormFieldControlComponent
  implements
    OnInit,
    MatFormFieldControl<FormFieldValue>,
    ControlValueAccessor,
    OnDestroy
{
  form!: FormGroup;
  onTouchedSubscription$!: Subscription;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private focusMonitor: FocusMonitor,
    private fb: FormBuilder,
    private errorMatcher: ErrorStateMatcher
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.form = this.fb.group<FormGroupFromInterface<FormFieldValue>>({
      query: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      scope: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  ngOnInit(): void {
    this.focusMonitor.monitor(this.input).subscribe((focused) => {
      this.focused = !!focused;
      this.stateChanges.next();
    });
    this.focusMonitor
      .monitor(this.input)
      .pipe(take(1))
      .subscribe(() => this.onTouch());
    this.onTouchedSubscription$ = this.form.valueChanges.subscribe((value) =>
      this.onChange(value)
    );
  }

  static nextId = 0;

  shouldLabelFloat: boolean = true;
  @HostBinding('attr.aria-describedBy') describedBy = '';

  @ViewChild(MatInput, { read: ElementRef, static: true })
  input!: ElementRef;

  onChange!: (value: FormFieldValue) => void;
  onTouch!: () => void;

  @Input()
  set value(value: FormFieldValue) {
    this.form?.patchValue(value);
    this.stateChanges.next();
  }

  @Input()
  errorStateMatcher!: ErrorStateMatcher;

  get value() {
    return this.form.value;
  }
  stateChanges: Subject<void> = new Subject();

  @HostBinding()
  id: string = `custom-form-field-id-${CustomFormFieldControlComponent.nextId++}`;

  private _placeholder: string = '';

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  get placeholder() {
    return this._placeholder;
  }

  focused: boolean = false;

  get empty(): boolean {
    return !this.value.query && !this.value.scope;
  }

  required: boolean = false;

  @Input()
  disabled: boolean = false;

  get errorState() {
    const matcher = this.errorStateMatcher || this.errorMatcher;
    return matcher.isErrorState(this.ngControl.control, null);
  }
  controlType?: string | undefined = 'custom-form-field';

  autofilled?: boolean | undefined = undefined;

  userAriaDescribedBy?: string | undefined;
  disableAutomaticLabeling?: boolean | undefined;
  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(): void {
    this.focusMonitor.focusVia(this.input, 'program');
  }

  writeValue(obj: FormFieldValue): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
    this.disabled = isDisabled;
    if (isDisabled) {
      this.form.disable();
    }
    this.stateChanges.next();
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
    this.onTouchedSubscription$?.unsubscribe();
  }
}
