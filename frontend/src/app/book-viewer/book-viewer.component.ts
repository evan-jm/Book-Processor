import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-viewer',
  imports: [NgIf],
  templateUrl: './book-viewer.component.html',
  styleUrl: './book-viewer.component.scss'
})
export class BookViewerComponent {
  @Input() book: string[] = [];
  public currentLine: number = 0;

  public nextLine(): void {
    this.currentLine++;
  }
}
