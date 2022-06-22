import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiseComponent } from './organise.component';

describe('OrganiseComponent', () => {
  let component: OrganiseComponent;
  let fixture: ComponentFixture<OrganiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
