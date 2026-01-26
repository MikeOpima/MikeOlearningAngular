import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundProjectListItem } from './fundProject-list-item';

describe('FundProjectListItem', () => {
  let component: FundProjectListItem;
  let fixture: ComponentFixture<FundProjectListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundProjectListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundProjectListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
