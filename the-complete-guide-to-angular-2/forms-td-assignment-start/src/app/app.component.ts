import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSubscription = "Advanced";
  @ViewChild("f") form: NgForm;
  account = { email: "", subscription: "", password: "" };

  onSubmit() {
    console.log(this.form);

    this.account.email = this.form.value.email;
    this.account.subscription = this.form.value.subscription;
    this.account.password = this.form.value.password;

    this.form.reset();
  }
}
