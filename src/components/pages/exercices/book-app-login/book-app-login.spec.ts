import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppLogin } from './book-app-login';

describe('BookAppLogin', () => {
  let component: BookAppLogin;
  let fixture: ComponentFixture<BookAppLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAppLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAppLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
