import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleMenuPage } from './single-menu.page';

describe('SingleMenuPage', () => {
  let component: SingleMenuPage;
  let fixture: ComponentFixture<SingleMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
