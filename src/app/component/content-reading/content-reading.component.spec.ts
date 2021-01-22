import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentReadingComponent } from './content-reading.component';

describe('ContentReadingComponent', () => {
  let component: ContentReadingComponent;
  let fixture: ComponentFixture<ContentReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
