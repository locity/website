import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() currentKey: string;
  @Input() cellKey: string;
  content: string;
  links: unknown;

  constructor(private grid: GridService) { }

  ngOnInit() {
    this.content = this.grid.getContent(this.cellKey);
    this.links = this.grid.getLinks(this.cellKey);
  }

}
