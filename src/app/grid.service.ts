import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private index: BehaviorSubject<number> = new BehaviorSubject(0);
  public readonly position: Observable<number> = this.index.asObservable();
  public cols = 8;
  private directions: direction[] = ['TL', 'TR', 'BL', 'BR', 'L', 'R'];
  public layout = [
    '', '', '', '', '', '', '', '',
    '', 'kunden', 'kontakt', '', 'digitale-transformation', 'workshop-schulung', '', '',
    '', 'home', '', 'websites', 'schwerpunkte', 'ux-prototyping', '', '',
    '', 'offene-stellen', 'team', '', 'mobile-web-app', 'single-page-app', '', '',
    '', 'marco-lehmann', 'tobias-krogh', '', '', '', '', '',
    '', '', '', '', '', 'impressum', '', '',
    '', '', '', '', '', '', '', '',
  ];
  public rows = Math.floor(this.layout.length / this.cols);
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

  constructor(private titleService: Title) {}

  getContent(key: string): string {
    if (key === '') {
      return '';
    }
    return `Das ist der "${key}" Content`;
  }

  setActive(index: number) {
    this.setTitle(this.layout[index]);
    this.index.next(index);
  }

  setTitle(key: string) {
    let title = 'Locity GmbH';
    if (key !== 'home') {
      title = `${key} - ${title}`;
    }
    this.titleService.setTitle(title);
  }

  getLinks(key: string): unknown {
    const links: directions = {};
    if (key !== '') {
      const index = this.layout.indexOf(key);
      const row = Math.floor(index / this.cols);
      const offset = row % 2;
      for (const direction of this.directions) {
        if (this.cells[key] !== undefined && this.cells[key][direction] !== undefined) {
          links[direction] = this.cells[key][direction];
        } else {
          let linkIndex = -1;
          switch (direction) {
            case 'TL':
              if (Math.floor((index - this.cols - offset) / this.cols) + 1 === row) {
                linkIndex = index - this.cols - offset;
              }
            break;
            case 'TR':
              if (Math.floor((index - this.cols - offset + 1) / this.cols) + 1 === row) {
                linkIndex = index - this.cols - offset + 1;
              }
            break;
            case 'BL':
              if (Math.floor((index + this.cols - offset) / this.cols) - 1 === row) {
                linkIndex = index + this.cols - offset;
              }
            break;
            case 'BR':
              if (Math.floor((index + this.cols - offset + 1) / this.cols) - 1 === row) {
                linkIndex = index + this.cols - offset + 1;
              }
            break;
            case 'L':
              if ((index - 1) % this.cols < index % this.cols) {
                linkIndex = index - 1;
              }
            break;
            case 'R':
              if ((index + 1) % this.cols > index % this.cols) {
                linkIndex = index + 1;
              }
            break;
          }
          if (linkIndex !== -1) {
            links[direction] = this.layout[linkIndex];
          } else {
            links[direction] = '';
          }
        }
      }
    }
    return links;
  }
}
