import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoaderComponent } from "@core/components";
import { NavbarComponent } from "@modules/components/navbar/navbar.component";

@Component({
  selector: "linkopia-root",
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Linkopia_Frontend";
}
