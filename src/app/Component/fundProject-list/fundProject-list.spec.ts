import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundProjectList } from './fundProject-list';

describe('FundProjectList', () => {
  let component: FundProjectList;
  let fixture: ComponentFixture<FundProjectList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundProjectList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundProjectList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
