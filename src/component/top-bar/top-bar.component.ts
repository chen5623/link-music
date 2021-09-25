import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <div fill-x one-line class="title">
      <div flex-1 class="logo">心动音乐</div>
      <div flex>{{date| date: 'yyyy-MM-dd'}}&ensp;{{weerk}}&ensp;{{date|date:'mm:ss'}}</div>
    </div>`,
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  day: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  date: Date;
  weerk: string;
  private intervalId: any;

  constructor() {
    this.getTime();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  getTime() {
    this.date = new Date();
    this.weerk = this.day[this.date.getDay()];
    this.intervalId = setInterval(() => {
      this.date = new Date();
      this.weerk = this.day[this.date.getDay()];
    }, 1000);
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }


}
