import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtsPage } from './tts.page';

describe('TtsPage', () => {
  let component: TtsPage;
  let fixture: ComponentFixture<TtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
