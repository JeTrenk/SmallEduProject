import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartzJobCliComponent } from './quartz-job-cli.component';

describe('QuartzJobCliComponent', () => {
  let component: QuartzJobCliComponent;
  let fixture: ComponentFixture<QuartzJobCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartzJobCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartzJobCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
