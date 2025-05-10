import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandMenuComponent } from './expand-menu.component';

describe('ExpandMenuComponent', () => {
  let component: ExpandMenuComponent;
  let fixture: ComponentFixture<ExpandMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
