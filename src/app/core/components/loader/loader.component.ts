import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@core/services';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'linkopia-loader',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
//#region variable

  isLoading: boolean = false;
  //#endregion

  //#region constructor

  constructor(private loaderService: LoaderService) {}
  //#endregion

  //#region lifecycle

  ngOnInit(): void {
    this.loaderService.loaderSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
//#endregion
}
