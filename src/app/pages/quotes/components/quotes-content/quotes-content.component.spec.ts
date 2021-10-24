import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesContentComponent } from './quotes-content.component';

describe('QuotesContentComponent', () => {
  let component: QuotesContentComponent;
  let fixture: ComponentFixture<QuotesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
