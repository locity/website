import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  key = 'home';
  content: string;
  links: unknown;

  constructor(private grid: GridService) { }

  ngOnInit() {
    this.content = this.grid.getContent(this.key);
    this.links = this.grid.getLinks(this.key);
  }

}
