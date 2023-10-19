import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnRestaurantPage } from './un-restaurant.page';

describe('UnRestaurantPage', () => {
  let component: UnRestaurantPage;
  let fixture: ComponentFixture<UnRestaurantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
