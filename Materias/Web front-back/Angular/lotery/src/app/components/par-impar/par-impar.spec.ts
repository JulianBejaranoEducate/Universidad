import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParImpar } from './par-impar';

describe('ParImpar', () => {
  let component: ParImpar;
  let fixture: ComponentFixture<ParImpar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParImpar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParImpar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
