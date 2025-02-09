import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private text: string[] = [];

  public onChange(book: string) {
    this.text = book.split('.');
  }

  public onSubmit() {
    console.log(this.text);
  }
}