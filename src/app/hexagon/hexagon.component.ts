import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {
  key: string;
  content: string;

  constructor(private route: ActivatedRoute,
              private grid: GridService) { }

  ngOnInit(): void {
    this.getKey();
    this.content = this.grid.getContent(this.key);
    this.grid.getLinks(this.key);
  }

  getKey(): void {
    this.key = this.route.snapshot.paramMap.get('key');
  }

}
