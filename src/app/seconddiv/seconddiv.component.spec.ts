import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddivComponent } from './seconddiv.component';

describe('SeconddivComponent', () => {
  let component: SeconddivComponent;
  let fixture: ComponentFixture<SeconddivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconddivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeconddivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
