import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TobiasKroghComponent } from './tobias-krogh.component'

describe('TobiasKroghComponent', () => {
  let component: TobiasKroghComponent
  let fixture: ComponentFixture<TobiasKroghComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TobiasKroghComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TobiasKroghComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
