import { Component } from "@angular/core";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  countDown!: number;
  intervalId: any;

  ngOnInit() {
    this.calculateCountDown();
    this.startTimer();
  }

  calculateCountDown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // fixe l'heure à minuit
    this.countDown = Math.ceil((tomorrow.getTime() - now.getTime()) / 1000); // le décompte est en secondes
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.countDown--;
      if (this.countDown <= 0) {
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
