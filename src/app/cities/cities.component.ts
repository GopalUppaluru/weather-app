import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../api-caller.service";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.css"],
})
export class CitiesComponent implements OnInit {
  citiesList = [];
  constructor(private apiSrvc: ApiCallerService) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.apiSrvc.getCities().subscribe(
      (response) => {
        console.log(response);
        let availableData = response.list;
        availableData = availableData.map((item) => {
          let temp = {};
          temp["cityName"] = item.name;
          temp["weather"] = item.weather[0];
          temp["temperature"] = item.main.temp;
          temp["sunriseTime"] = new Date(item.sys.sunrise);
          temp["sunsetTime"] = new Date(item.sys.sunset);
          temp["lat"] = item?.coord?.lat;
          temp["long"] = item?.coord?.lon;
          return temp;
        });
        this.citiesList = [...availableData];
      },
      (error) => {}
    );
  }
}
