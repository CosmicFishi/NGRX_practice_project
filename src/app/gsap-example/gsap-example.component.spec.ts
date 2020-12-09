import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapExampleComponent } from './gsap-example.component';

describe('GsapExampleComponent', () => {
  let component: GsapExampleComponent;
  let fixture: ComponentFixture<GsapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsapExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
