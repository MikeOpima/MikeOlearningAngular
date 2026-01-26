import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListItem } from './content-list-item';

describe('ContentListItem', () => {
  let component: ContentListItem;
  let fixture: ComponentFixture<ContentListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
