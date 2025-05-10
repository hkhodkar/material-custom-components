import { TemplateRef, Type } from '@angular/core';

export interface ColumnConfig {
  value: string;
  label: string;
  render?: () => TemplateRef<unknown> | Type<unknown>;
}

export interface Cell<T = any> {
  value: T;
}

export interface TableRow {
  id: number;
  value: string;
  status: string;
}
