import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServer(
      +this.activatedRoute.snapshot.params["id"]
    );
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(
        +this.activatedRoute.snapshot.params["id"]
      );
    });
  }

  onEdit() {
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }
}
