import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { BehaviorSubject, Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class GridService {
  public index: BehaviorSubject<number> = new BehaviorSubject(0)
  public readonly position: Observable<number> = this.index.asObservable()
  public cols = 8
  private directions: Direction[] = ['TL', 'TR', 'BL', 'BR', 'L', 'R']

  // prettier-ignore
  public layout = [
    '', '', '', '', '', '', '', '',
    '', 'kontakt', 'offene-stellen', '', 'entwicklung', 'frontend-security', '', '',
    '', 'home', '', '', 'leistungen', 'digital-analytics-tracking', '', '',
    '', 'kunden', 'team', '', 'digitale-transformation', 'seo', '', '',
    '', 'marco-steinhoff', 'tobias-krogh', '', '', '', '', '',
    '', '', '', '', '', 'impressum', '', '',
    '', '', '', '', '', '', '', '',
  ];
  public rows = Math.floor(this.layout.length / this.cols)
  private cells = {
    home: {
      R: 'leistungen',
      L: 'impressum',
    },
    leistungen: {
      L: 'home',
      component: 'services',
    },
    seo: {
      title: 'SEO Audit',
    },
    entwicklung: {
      component: 'development',
    },
    'digital-analytics-tracking': {
      title: 'Digital Analytics (Tracking)',
      component: 'digital-analytics',
    },
    'digitale-transformation': {
      component: 'digital-transformation',
    },
    kunden: {
      title: 'Unsere Kunden',
      BR: '',
      component: 'clients',
    },
    team: {
      title: 'Unser Team',
      L: '',
    },
    'marco-steinhoff': {
      TL: '',
    },
    'ux-prototyping': {
      title: 'UX  Prototyping',
    },
    impressum: {
      TL: 'home',
      component: 'imprint',
      title: 'Impressum',
    },
    kontakt: {
      component: 'contact',
    },
    'offene-stellen': {
      component: 'jobs',
    },
  }

  constructor(private titleService: Title) {}

  getContent(key: string): string {
    if (key === '') {
      return ''
    }
    return key // `Das ist der "${key}" Content`;
  }

  setActive(index: number) {
    this.setTitle(this.layout[index])
    this.index.next(index)
  }

  setTitle(key: string) {
    let title = 'Locity GmbH'
    if (key !== 'home') {
      title = `${this.getTitle(key)} - ${title}`
    } else {
      title = `${title} - Breathe Love Code`
    }
    this.titleService.setTitle(title)
  }

  getComponent(key: string): string {
    if (this.cells[key] !== undefined && this.cells[key].component !== undefined) {
      return this.cells[key].component
    }
    return key
  }

  getTitle(key: string): string {
    if (this.cells[key] !== undefined && this.cells[key].title !== undefined) {
      return this.cells[key].title
    }
    return key
      .split('-')
      .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
      .join(' ')
  }

  getLinks(key: string): Directions {
    const links: Directions = {}
    if (key !== '') {
      const index = this.layout.indexOf(key)
      const row = Math.floor(index / this.cols)
      const offset = row % 2
      for (const direction of this.directions) {
        if (this.cells[key] !== undefined && this.cells[key][direction] !== undefined) {
          links[direction] = this.cells[key][direction]
        } else {
          let linkIndex = -1
          switch (direction) {
            case 'TL':
              if (Math.floor((index - this.cols - offset) / this.cols) + 1 === row) {
                linkIndex = index - this.cols - offset
              }
              break
            case 'TR':
              if (Math.floor((index - this.cols - offset + 1) / this.cols) + 1 === row) {
                linkIndex = index - this.cols - offset + 1
              }
              break
            case 'BL':
              if (Math.floor((index + this.cols - offset) / this.cols) - 1 === row) {
                linkIndex = index + this.cols - offset
              }
              break
            case 'BR':
              if (Math.floor((index + this.cols - offset + 1) / this.cols) - 1 === row) {
                linkIndex = index + this.cols - offset + 1
              }
              break
            case 'L':
              if ((index - 1) % this.cols < index % this.cols) {
                linkIndex = index - 1
              }
              break
            case 'R':
              if ((index + 1) % this.cols > index % this.cols) {
                linkIndex = index + 1
              }
              break
          }
          if (linkIndex !== -1) {
            links[direction] = this.layout[linkIndex]
          } else {
            links[direction] = ''
          }
        }
      }
    }
    return links
  }
}
