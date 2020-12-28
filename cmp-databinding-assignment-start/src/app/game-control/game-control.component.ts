import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  cycle = 0;
  interval;
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];
  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(this.doCycle.bind(this), 1000);
  }

  doCycle() {
    this.cycle++;

    if (this.isEven(this.cycle)) {
      this.evenNumbers.push(this.cycle);
      return;
    }
    this.oddNumbers.push(this.cycle);

    console.log(this.cycle);
  }

  isEven(n: number) {
    return n % 2 == 0;
  }

  onStop() {
    clearInterval(this.interval);
  }
}
