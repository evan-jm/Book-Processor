import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-viewer',
  imports: [],
  templateUrl: './book-viewer.component.html',
  styleUrl: './book-viewer.component.scss'
})
export class BookViewerComponent {
  @Input() book: string[] = [];
}
