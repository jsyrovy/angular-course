import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showDetails = false;
  history = [];
  currentId = 0;

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.history.push({ id: this.currentId, status: this.showDetails });
    this.currentId++;
  }
}
