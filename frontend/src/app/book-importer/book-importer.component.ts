import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-importer',
  imports: [ReactiveFormsModule],
  templateUrl: './book-importer.component.html',
  styleUrl: './book-importer.component.scss',
})
export class BookImporterComponent {
  @Output() bookUpload = new EventEmitter<string[]>();

  public formGroup = new FormGroup({
    book: new FormControl(''),
  });

  public onSubmit() {
    const bookValue = this.formGroup.get('book')?.value ?? '';
    this.bookUpload.emit(bookValue.split('.'));
  }
}
