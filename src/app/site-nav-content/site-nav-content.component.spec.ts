import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavContentComponent } from './site-nav-content.component';

describe('SiteNavContentComponent', () => {
  let component: SiteNavContentComponent;
  let fixture: ComponentFixture<SiteNavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
