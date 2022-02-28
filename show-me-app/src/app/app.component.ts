import { Component } from '@angular/core';
import { TvMazeService } from './tv-maze.service';
import { IShowDisplay } from './ishow-display';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'show-me-app';
  showDisplay: IShowDisplay = {
    showName: '',
    showLanguage: '',
    showGenres: [],
    showStatus: '',
    showRuntime: 0,
    showTime: '',
    showDays: [],
    showNetwork: '',
    showImage: '',
    showSummary: ''
  }

  constructor(private tvMazeService: TvMazeService){}
  doSearch(searchValue: string){
      const userInput = searchValue;
      this.tvMazeService.getShowInfo(userInput)
      .subscribe(data => this.showDisplay = data)
  }
}
