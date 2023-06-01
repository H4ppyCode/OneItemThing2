import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  countDown!: number;
  intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    // 24h en secondes
    this.countDown = 24 * 60 * 60;
    this.intervalId = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  get heures(): number {
    return Math.floor(this.countDown / 3600);
  }

  get minutes(): number {
    return Math.floor((this.countDown % 3600) / 60);
  }

  get secondes(): number {
    return this.countDown % 60;
  }
}
