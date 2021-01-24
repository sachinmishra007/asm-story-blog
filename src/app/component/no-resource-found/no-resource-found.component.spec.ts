import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResourceFoundComponent } from './no-resource-found.component';

describe('NoResourceFoundComponent', () => {
  let component: NoResourceFoundComponent;
  let fixture: ComponentFixture<NoResourceFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoResourceFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResourceFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
