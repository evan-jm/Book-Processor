import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookImporterComponent } from './book-importer.component';

describe('BookImporterComponent', () => {
  let component: BookImporterComponent;
  let fixture: ComponentFixture<BookImporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookImporterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
