import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMaterialInputComponent } from './custom-material-input.component';

describe('CustomMaterialInputComponent', () => {
  let component: CustomMaterialInputComponent;
  let fixture: ComponentFixture<CustomMaterialInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMaterialInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomMaterialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
