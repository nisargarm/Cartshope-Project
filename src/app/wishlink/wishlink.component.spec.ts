import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlinkComponent } from './wishlink.component';

describe('WishlinkComponent', () => {
  let component: WishlinkComponent;
  let fixture: ComponentFixture<WishlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlinkComponent]
    });
    fixture = TestBed.createComponent(WishlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
