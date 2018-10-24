import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @HostBinding('style.transform') transform: string;
  private key: string;
  private cols: number;
  private layout: string[];

  constructor(
    private route: ActivatedRoute,
    private grid: GridService,
    private router: Router
  ) {
    this.cols = this.grid.cols;
    this.layout = this.grid.layout;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initKey();
      }
    });
  }

  ngOnInit() {}

  setPosition() {
    console.log('setPos');
    const index = this.layout.indexOf(this.key);
    const row = Math.floor(index / this.cols);
    const col = index % this.cols;
    const offset = row % 2 === 0 ? -25 : 25;
    console.log(index, row, col);
    this.transform = `translate(${col * -102 + offset}%, ${row * -88 + 21}%)`;
  }

  initKey(): void {
    let key = this.route.snapshot.paramMap.get('key');
    if (key === '' || key === null) {
      key = 'home';
    }
    if (this.layout.indexOf(key) === -1) {
      this.router.navigateByUrl('/');
    } else {
      this.key = key;
      this.setPosition();
    }
  }

  getRowClass(index: number): string {
    const row = Math.floor(index / this.grid.cols);
    return row % 2 === 0 ? 'odd' : 'even';
  }
}
