import { Component, Input, OnInit } from '@angular/core';
import { IShowDisplay } from '../ishow-display';

@Component({
  selector: 'app-show-display',
  templateUrl: './show-display.component.html',
  styleUrls: ['./show-display.component.css']
})
export class ShowDisplayComponent implements OnInit {

  @Input() current: IShowDisplay
  constructor() { 
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

  ngOnInit(): void {}

}
