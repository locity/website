import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DigitalAnalyticsComponent } from './digital-analytics.component'

describe('DigitalAnalyticsComponent', () => {
  let component: DigitalAnalyticsComponent
  let fixture: ComponentFixture<DigitalAnalyticsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalAnalyticsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAnalyticsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
