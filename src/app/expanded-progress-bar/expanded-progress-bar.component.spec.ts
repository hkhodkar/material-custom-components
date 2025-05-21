import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedProgressBarComponent } from './expanded-progress-bar.component';

describe('ExpandedProgressBarComponent', () => {
  let component: ExpandedProgressBarComponent;
  let fixture: ComponentFixture<ExpandedProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandedProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
