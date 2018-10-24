import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {
  key: string;
  content: string;
  links: unknown;

  constructor(
    private route: ActivatedRoute,
    private grid: GridService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initKey();
        console.log(this.links);
      }
    });
  }

  ngOnInit(): void {}

  initKey(): void {
    this.key = this.route.snapshot.paramMap.get('key');
    this.content = this.grid.getContent(this.key);
    this.links = this.grid.getLinks(this.key);
  }
}
