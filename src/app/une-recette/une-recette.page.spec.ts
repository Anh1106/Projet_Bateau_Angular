import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UneRecettePage } from './une-recette.page';

describe('UneRecettePage', () => {
  let component: UneRecettePage;
  let fixture: ComponentFixture<UneRecettePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UneRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
