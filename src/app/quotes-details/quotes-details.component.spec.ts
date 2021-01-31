import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { QuotesDetailComponent } from './quotes-details.component';

describe('QuotesDetailsComponent', () => {
  let component: QuotesDetailComponent;
  let fixture: ComponentFixture<QuotesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
