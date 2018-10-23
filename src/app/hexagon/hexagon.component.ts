import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {
  key: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getKey();
  }

  getKey(): void {
    this.key = this.route.snapshot.paramMap.get('key');
  }

}
