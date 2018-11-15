import { Component } from '@angular/core';
import { GridService } from './grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  readonly images = ['hamburg1.jpg', 'hamburg2.jpg', 'hamburg3.jpg', 'hamburg4.jpg', 'hamburg5.jpg', 'hamburg6.jpg'];
  title = 'Locity GmbH';
  backgroundImage: string;
  top: string;
  left: string;
  backgroundStyle = {};

  constructor(private grid: GridService) {
    this.backgroundImage = `url('/assets/${this.images[Math.floor((Math.random() * this.images.length))]}')`;
    this.grid.position.subscribe(index => {
      this.top = `${-40 / this.grid.rows * Math.floor(index / this.grid.cols)}%`;
      this.left = `${-40 / this.grid.cols * (index % this.grid.cols)}%`;
    });
  }
}
