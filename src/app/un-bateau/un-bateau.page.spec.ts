import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnBateauPage } from './un-bateau.page';

describe('UnBateauPage', () => {
  let component: UnBateauPage;
  let fixture: ComponentFixture<UnBateauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnBateauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
