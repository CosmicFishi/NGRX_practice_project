import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidPanelComponent } from './covid-panel.component';

describe('CovidPanelComponent', () => {
  let component: CovidPanelComponent;
  let fixture: ComponentFixture<CovidPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
