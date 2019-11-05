import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit, AfterViewInit {
  @ViewChild('logo', {static: true}) logo
  // private ctx: any;
  // private scale = 0.5;
  // private blueLight = '#6C8CD5';
  // private blueMiddle = '#4671D5';
  // private blueDark = '#2A4480';
  // private points: Points = {
  //   p0_250: {x: 0, y: 250}, p0_750: {x: 0, y: 750},
  //   p130_325: {x: 130, y: 325}, p130_675: {x: 130, y: 675},
  //   p260_400: {x: 260, y: 400}, p260_600: {x: 260, y: 600},
  //   p433_0: {x: 433, y: 0}, p433_150: {x: 433, y: 150}, p433_300: {x: 433, y: 300}, p433_700: {x: 433, y: 700}, p433_850: {x: 433, y: 850}, p433_1000: {x: 433, y: 1000},
  //   p606_400: {x: 606, y: 400}, p606_600: {x: 606, y: 600},
  //   p736_325: {x: 736, y: 325}, p736_675: {x: 736, y: 675},
  //   p866_250: {x: 866, y: 250}, p866_750: {x: 866, y: 750}
  // };
  // tslint:disable: max-line-length
  // private triangles: Triangle[] = [
  //   {points: [this.points.p0_250, this.points.p130_325, this.points.p0_750], color: this.blueDark}, {points: [this.points.p130_675, this.points.p130_325, this.points.p0_750], color: this.blueDark}, {points: [this.points.p130_675, this.points.p433_850, this.points.p0_750], color: this.blueDark}, {points: [this.points.p433_1000, this.points.p433_850, this.points.p0_750], color: this.blueDark},
  //   {points: [this.points.p433_150, this.points.p433_300, this.points.p736_325], color: this.blueDark}, {points: [this.points.p606_400, this.points.p433_300, this.points.p736_325], color: this.blueDark}, {points: [this.points.p606_400, this.points.p606_600, this.points.p736_325], color: this.blueDark}, {points: [this.points.p736_675, this.points.p606_600, this.points.p736_325], color: this.blueDark},
  //   {points: [this.points.p736_675, this.points.p866_750, this.points.p736_325], color: this.blueMiddle}, {points: [this.points.p866_250, this.points.p866_750, this.points.p736_325], color: this.blueMiddle}, {points: [this.points.p736_675, this.points.p866_750, this.points.p433_850], color: this.blueMiddle}, {points: [this.points.p433_1000, this.points.p866_750, this.points.p433_850], color: this.blueMiddle},
  //   {points: [this.points.p130_325, this.points.p130_675, this.points.p260_600], color: this.blueMiddle}, {points: [this.points.p130_325, this.points.p260_400, this.points.p260_600], color: this.blueMiddle}, {points: [this.points.p130_325, this.points.p260_400, this.points.p433_300], color: this.blueMiddle}, {points: [this.points.p130_325, this.points.p433_150, this.points.p433_300], color: this.blueMiddle},
  //   {points: [this.points.p0_250, this.points.p130_325, this.points.p433_0], color: this.blueLight}, {points: [this.points.p433_150, this.points.p130_325, this.points.p433_0], color: this.blueLight}, {points: [this.points.p433_150, this.points.p736_325, this.points.p433_0], color: this.blueLight}, {points: [this.points.p866_250, this.points.p736_325, this.points.p433_0], color: this.blueLight},
  //   {points: [this.points.p130_675, this.points.p260_600, this.points.p433_850], color: this.blueLight}, {points: [this.points.p433_700, this.points.p260_600, this.points.p433_850], color: this.blueLight}, {points: [this.points.p433_700, this.points.p606_600, this.points.p433_850], color: this.blueLight}, {points: [this.points.p606_600, this.points.p736_675, this.points.p433_850], color: this.blueLight}
  // ];
  // tslint:enable: max-line-length

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this.ctx = this.logo.nativeElement.getContext('2d');
    // // this.ctx.globalAlpha = 0.8;
    // this.triangles.forEach(this.triangle);
  }

  // triangle = (data: Triangle) => {
  //   this.ctx.beginPath();
  //   this.ctx.fillStyle = data.color;
  //   data.points.forEach((point, index) => {
  //     if (index === 0) {
  //       this.ctx.moveTo(point.x * this.scale, point.y * this.scale);
  //     } else {
  //       this.ctx.lineTo(point.x * this.scale, point.y * this.scale);
  //     }
  //   });
  //   this.ctx.fill();
  // }
}
