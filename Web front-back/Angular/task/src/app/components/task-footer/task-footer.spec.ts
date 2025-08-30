import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFooter } from './task-footer';

describe('TaskFooter', () => {
  let component: TaskFooter;
  let fixture: ComponentFixture<TaskFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
