import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dummy-list',
  templateUrl: './dummy-list.component.html',
  styleUrls: ['./dummy-list.component.scss']
})
export class DummyListComponent implements OnInit {

  num: FormControl = new FormControl();
  output: any;
  webWorker!: any
  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('./dummy-list.worker', { type: 'module' })
      this.webWorker.onmessage = function (data: any) {
        console.log(`page got message: ${data}`);
        this.webWorker.postMessage('hello');
      }
    }
  }
  calcFib() {
    this.webWorker.postMessage(this.num.value)
  }

}
