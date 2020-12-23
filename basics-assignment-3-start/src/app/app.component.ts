import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showDetails = false;
  history = [];

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.history.push(new Date());
  }
}
