import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiCallerService } from "../api-caller.service";
@Component({
  selector: "app-cities-details",
  templateUrl: "./cities-details.component.html",
  styleUrls: ["./cities-details.component.css"],
})
export class CitiesDetailsComponent implements OnInit {
  cityDataJson = {
    daily: []
  };
  cityName = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private appSrvc: ApiCallerService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.appSrvc.getCityData(params.lat, params.long).subscribe(
        (res) => {
          console.log(res);
          this.cityName = params.cityName;
          this.cityDataJson = { ...res };
        },
        (err) => {}
      );
    });
  }
}
