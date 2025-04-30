import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnelComponent } from './menu-anel.component';

describe('MenuAnelComponent', () => {
  let component: MenuAnelComponent;
  let fixture: ComponentFixture<MenuAnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
