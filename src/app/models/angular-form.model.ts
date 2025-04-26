import { FormArray, FormControl, FormGroup } from '@angular/forms';

/**
 * Converts a TypeScript interface to a FormGroup type.
 * It's useful for creating a FormGroup for an interface and your form will be exactly the same as the interface.
 */
export type FormGroupFromInterface<T> = {
  [K in keyof T]: NonNullable<T[K]> extends Array<unknown>
  ? FormArray<
    NonNullable<T[K]>[0] extends object
    ? FormGroup<FormGroupFromInterface<NonNullable<T[K]>[0]>>
    : FormControl<NonNullable<T[K]>[0]>
  >
  : T[K] extends object | null | undefined
  ? T[K] extends null | undefined
  ? FormControl<T[K]>
  : FormGroup<FormGroupFromInterface<NonNullable<T[K]>>>
  : FormControl<T[K]>;
};
