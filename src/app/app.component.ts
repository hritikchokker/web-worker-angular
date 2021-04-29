import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-worker-angular';
  output: any;
  webWorker!: Worker;
  sameThreadOutput!: number;
  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('./app.worker', { type: 'module' });
      this.webWorker.onmessage = ({ data }) => {
        this.output = data;
        console.log(`page got message: ${data}`);
      };
    }
  }
  calcFib(num: number): void {
    this.webWorker.postMessage({ num });
  }
  fibonacci(num: number): number {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
  fibonacSameThread(num: number): void {
    const result = this.fibonacci(num);
    this.sameThreadOutput = result;
  }


}
