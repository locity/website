import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() currentKey: string;
  @Input() cellKey: string;
  content: string;
  links: unknown;
  component: string;

  constructor(private grid: GridService) { }

  ngOnInit() {
    this.links = this.grid.getLinks(this.cellKey);
    this.component = this.grid.getComponent(this.cellKey);
  }

  getLink(key: string): string {
    return key === 'home' ? '/' : `/${key}`;
  }

  getTitle(key: string): string {
    return this.grid.getTitle(key);
  }
}
