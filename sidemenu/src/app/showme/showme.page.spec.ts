import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmePage } from './showme.page';

describe('ShowmePage', () => {
  let component: ShowmePage;
  let fixture: ComponentFixture<ShowmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
