import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgFor } from './directive-ng-for';

describe('DirectiveNgFor', () => {
  let component: DirectiveNgFor;
  let fixture: ComponentFixture<DirectiveNgFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
