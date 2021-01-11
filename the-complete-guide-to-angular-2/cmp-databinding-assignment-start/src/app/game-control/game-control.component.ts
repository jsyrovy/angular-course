import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  cycle = 0;
  interval;
  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      this.cycle++;
      this.intervalFired.emit(this.cycle);
    }, 1000);
  }

  

  onStop() {
    clearInterval(this.interval);
  }
}
