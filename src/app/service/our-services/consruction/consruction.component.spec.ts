import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsructionComponent } from './consruction.component';

describe('ConsructionComponent', () => {
  let component: ConsructionComponent;
  let fixture: ComponentFixture<ConsructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
