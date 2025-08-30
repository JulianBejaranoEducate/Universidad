import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgIf } from './directive-ng-if';

describe('DirectiveNgIf', () => {
  let component: DirectiveNgIf;
  let fixture: ComponentFixture<DirectiveNgIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
