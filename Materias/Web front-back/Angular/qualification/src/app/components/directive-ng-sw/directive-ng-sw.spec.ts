import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgSw } from './directive-ng-sw';

describe('DirectiveNgSw', () => {
  let component: DirectiveNgSw;
  let fixture: ComponentFixture<DirectiveNgSw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgSw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgSw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
