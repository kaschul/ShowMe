import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDisplay } from './ishow-display';
import { ITvMazeData } from './itv-maze-data';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {

  constructor(private httpClient : HttpClient) { }

  getShowInfo(showNameEntered: string){
    return  this.httpClient.get<ITvMazeData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showNameEntered}`)
  }

  private transformToIShowDisplay(data: ITvMazeData){
    return {
      showName: data.name,
      showLanguage: data.language,
      showGenres: data.genres[0],
      showStatus: data.status,
      showRuntime: data.runtime,
      showTime: data.schedule.time,
      showDays: data.schedule.days[0],
      showNetwork: data.network.name,
      showImage: data.image.medium,
      showSummary: data.summary
    }
  }
}