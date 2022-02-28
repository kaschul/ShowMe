import { Component, OnInit } from '@angular/core';
import { IShowDisplay } from '../ishow-display';
import { TvMazeService } from '../tv-maze.service';

@Component({
  selector: 'app-show-display',
  templateUrl: './show-display.component.html',
  styleUrls: ['./show-display.component.css']
})
export class ShowDisplayComponent implements OnInit {

  current: IShowDisplay
  constructor(private tvMazeService: TvMazeService) { 
    this.current = {
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
  }

  ngOnInit(): void {
    this.tvMazeService.getShowInfo('house').subscribe(data => this.current = data)
  }

}
