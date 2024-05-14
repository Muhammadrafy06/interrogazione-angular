import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamVisualizerComponent } from './spam-visualizer.component';

describe('SpamVisualizerComponent', () => {
  let component: SpamVisualizerComponent;
  let fixture: ComponentFixture<SpamVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpamVisualizerComponent]
    });
    fixture = TestBed.createComponent(SpamVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
