import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percent: any = 0;
  radius: 100;
  progress: 0;
  minutes: any = 1;
  seconds: any = 30;
  fullTime: any = '00:01:30';
  timer: any = false;

  // To show time elapsed vars

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00',
  };

  overallTimer: any = false;

  resetTimer() {
    if (this.overallTimer) {
      clearInterval(this.overallTimer);
      this.elapsed.h = '00';
      this.elapsed.m = '00';
      this.elapsed.s = '00';
    }
    this.startTimer();
  }

  // Started after tap on circle
  startTimer() {

    // restart timer if going

    if (this.timer) {
      clearInterval(this.timer);
    }

    if (!this.overallTimer) {
      this.progressTimer();
    }


    // allows to tap on timer multiple times - sets timer to false
    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    // splits up time into readable format
    const timeSplit = this.fullTime.split(':');

    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    // tslint:disable-next-line: radix
    const totalSecs = Math.floor(this.minutes * 60) + parseInt(this.seconds);

    this.timer = setInterval(() => {

      // Stops timer when complete
      if (this.percent === this.radius) {
        clearInterval(this.timer);
      }
      // divides progress by total amount of seconds then multiplies by radius (100)
      this.percent = Math.floor((this.progress / totalSecs) * 100);
      this.progress++;
    }, 1000);
  }


  progressTimer() {
    const countDown = new Date();

    this.overallTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - countDown.getTime();
      // math for converting to hours and minutes
      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

      // padding with zeroes
      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);

    }, 1000);
  }


  // to 'pad' numbers with zeroes to keep it looking nice

  pad(num, size) {
    let s = num + '';
    while (s.length < size) {
     s = '0' + s;
    }
    return s;
  }

}
