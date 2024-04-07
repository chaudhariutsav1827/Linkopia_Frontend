import { Component, OnInit } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

@Component({
  selector: "linkopia-navbar",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent implements OnInit {
  //#region variables

  isDarkTheme: boolean;
  isSaved = false;
  //#endregion

  //#region lifecycle

  ngOnInit() {
    this.themeCheck();
  }
  //#endregion

  //#region methods

  private themeCheck() {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userTheme) {
      this.isDarkTheme = userTheme === "dark";
      this.isDarkTheme && document.documentElement.classList.add("dark");
    } else {
      this.isDarkTheme = systemTheme;
      this.isDarkTheme && document.documentElement.classList.add("dark");
      localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
    }
  }

  switchTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
  }
  //#endregion
}
