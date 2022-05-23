import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturaldesignComponent } from './architecturaldesign.component';

describe('ArchitecturaldesignComponent', () => {
  let component: ArchitecturaldesignComponent;
  let fixture: ComponentFixture<ArchitecturaldesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturaldesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitecturaldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
