import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MarcoSteinhoffComponent } from './marco-steinhoff.component'


describe('MarcoSteinhoffComponent', () => {
  let component: MarcoSteinhoffComponent
  let fixture: ComponentFixture<MarcoSteinhoffComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarcoSteinhoffComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoSteinhoffComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})