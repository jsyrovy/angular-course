import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  onIntervalFired(firedNumber: number) {
    if (this.isEven(firedNumber)) {
      this.evenNumbers.push(firedNumber);
      return;
    }

    this.oddNumbers.push(firedNumber);
  }

  isEven(n: number) {
    return n % 2 == 0;
  }
}
