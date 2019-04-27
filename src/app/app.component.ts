import { Component } from '@angular/core'
import { GridService } from './grid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly images = ['hamburg1.jpg', 'hamburg2.jpg', 'hamburg3.jpg']
  private readonly activeImage = Math.floor(Math.random() * this.images.length)
  copyright = `© ${new Date().getFullYear()} Locity GmbH`
  title = 'Locity GmbH'
  backgroundImage: string
  top: string
  left: string
  backgroundStyle = {}

  constructor(private grid: GridService) {
    this.backgroundImage = `url('/assets/${this.images[this.activeImage]}')`
    this.grid.position.subscribe(index => {
      this.top = `${(-40 / this.grid.rows) * Math.floor(index / this.grid.cols)}%`
      this.left = `${(-40 / this.grid.cols) * (index % this.grid.cols)}%`
    })
  }
}
