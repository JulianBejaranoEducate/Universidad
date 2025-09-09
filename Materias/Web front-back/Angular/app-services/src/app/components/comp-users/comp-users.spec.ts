import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUsers } from './comp-users';

describe('CompUsers', () => {
  let component: CompUsers;
  let fixture: ComponentFixture<CompUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
