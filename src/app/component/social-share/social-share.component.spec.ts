import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareComponent } from './social-share.component';

describe('LoadCompnentComponent', () => {
  let component: SocialShareComponent;
  let fixture: ComponentFixture<SocialShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
