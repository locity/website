import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  public cols = 6;
  private row: number;
  private index: number;
  private offset: number;
  private directions: direction[] = ['TL', 'TR', 'BL', 'BR', 'L', 'R'];
  public layout = [
    'kunden', 'kontakt', '', 'digitale-transformation', 'workshop-schulung', '',
    '', 'home', '', 'websites', 'schwerpunkte', 'ux-prototyping',
    'offene-stellen', 'team', '', 'mobile-web-app', 'single-page-app', '',
    '', 'marco-lehmann', 'tobias-krogh', '', '', '',
    '', '', '', 'impressum'
  ];
  private cells = {
    home: {
      R: 'schwerpunkte'
    },
    'offene-stellen': {
      BR: ''
    },
    team: {
      L: ''
    },
    'marco-lehmann': {
      TL: ''
    },
    impressum: {
      TL: 'home'
    }
  };

  constructor() { }

  getContent(key: string): string {
    if (key === '') {
      return '';
    }
    return `Das ist der "${key}" Content`;
  }

  getLinks(key: string): unknown {
    const links: directions = {};
    if (key !== '') {
      this.index = this.layout.indexOf(key);
      this.row = Math.floor(this.index / this.cols);
      this.offset = this.row % 2;
      for (const direction of this.directions) {
        links[direction] = this.getLink(key, direction);
      }
    }
    return links;
  }

  private getLink(key: string, direction: direction): string {
    if (this.cells[key] !== undefined && this.cells[key][direction] !== undefined) {
      return this.cells[key][direction];
    }
    let linkIndex = -1;
    switch (direction) {
      case 'TL':
        if (Math.floor((this.index - this.cols - this.offset) / this.cols) + 1 === this.row) {
          linkIndex = this.index - this.cols - this.offset;
        }
      break;
      case 'TR':
        if (Math.floor((this.index - this.cols - this.offset + 1) / this.cols) + 1 === this.row) {
          linkIndex = this.index - this.cols - this.offset + 1;
        }
      break;
      case 'BL':
        if (Math.floor((this.index + this.cols - this.offset) / this.cols) - 1 === this.row) {
          linkIndex = this.index + this.cols - this.offset;
        }
      break;
      case 'BR':
        if (Math.floor((this.index + this.cols - this.offset + 1) / this.cols) - 1 === this.row) {
          linkIndex = this.index + this.cols - this.offset + 1;
        }
      break;
      case 'L':
        if ((this.index - 1) % this.cols < this.index % this.cols) {
          linkIndex = this.index - 1;
        }
      break;
      case 'R':
        if ((this.index + 1) % this.cols > this.index % this.cols) {
          linkIndex = this.index + 1;
        }
      break;
    }
    if (linkIndex !== -1) {
      return this.layout[linkIndex];
    }
    return '';
  }
}
