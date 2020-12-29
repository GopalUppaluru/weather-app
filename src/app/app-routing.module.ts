import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CitiesComponent } from "./cities/cities.component";
import { CitiesDetailsComponent } from "./cities-details/cities-details.component";

const routes: Routes = [
  { path: "cities", component: CitiesComponent },
  { path: "cityData/:cityName/:lat/:long", component: CitiesDetailsComponent },
  { path: "", redirectTo: "/cities", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
