import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenbuildingComponent } from './greenbuilding.component';

describe('GreenbuildingComponent', () => {
  let component: GreenbuildingComponent;
  let fixture: ComponentFixture<GreenbuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenbuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
