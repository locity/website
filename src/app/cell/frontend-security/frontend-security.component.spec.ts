import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSecurityComponent } from './frontend-security.component';

describe('FrontendSecurityComponent', () => {
  let component: FrontendSecurityComponent;
  let fixture: ComponentFixture<FrontendSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
