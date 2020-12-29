import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  private activated = 0;
  private inactivated = 0;

  constructor() {}

  addActivated() {
    this.activated++;
    console.log("activated", this.activated);
  }

  addInactivated() {
    this.inactivated++;
    console.log("inactivated", this.inactivated);
  }
}
