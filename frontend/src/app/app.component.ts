import { Component } from '@angular/core';
import { BookViewerComponent } from './book-viewer/book-viewer.component';
import { BookImporterComponent } from './book-importer/book-importer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [BookViewerComponent, BookImporterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public book: string[] = [];

  public bookUpload(book: string[]) {
    this.book = book;
  }
}