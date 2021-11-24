import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrslistComponent } from './drslist.component';

describe('DrslistComponent', () => {
  let component: DrslistComponent;
  let fixture: ComponentFixture<DrslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
