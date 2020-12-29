import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiCallerService {
  constructor(private http: HttpClient) {}

  // Below is the call to get AOCummilative date from Spring boot URL

  getCities(): Observable<any> {
    return this.http.get<any>(
      "http://api.openweathermap.org/data/2.5/group?id=2172797,1680106,2968815,4184222,4184165&appid=3d8b309701a13f65b660fa2c64cdc517",
      {}
    );
  }
  getCityData(lat, lon): Observable<any> {
    return this.http.get<any>(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=3d8b309701a13f65b660fa2c64cdc517`,
      {}
    );
  }
}
