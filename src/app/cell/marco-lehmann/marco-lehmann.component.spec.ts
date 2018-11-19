import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoLehmannComponent } from './marco-lehmann.component';

describe('MarcoLehmannComponent', () => {
  let component: MarcoLehmannComponent;
  let fixture: ComponentFixture<MarcoLehmannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoLehmannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoLehmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
