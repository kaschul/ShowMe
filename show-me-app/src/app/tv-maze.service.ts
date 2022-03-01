import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ITvMazeData } from './itv-maze-data';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {

  constructor(private httpClient : HttpClient) {}

  getShowInfo(showNameEntered: string){
    return this.httpClient.get<ITvMazeData[]>
    (`https://api.tvmaze.com/search/shows?q=${showNameEntered}`)
    .pipe(map((data => {
      return data.map((show) => {return this.transformToIShowDisplay(show)})})))
    }

  private transformToIShowDisplay(showdata: ITvMazeData){
    return {
      showName: showdata.show.name,
      showLanguage: showdata.show.language,
      showGenres: showdata.show.genres,
      showStatus: showdata.show.status,
      showRuntime: showdata.show.runtime,
      showTime: showdata.show.schedule.time,
      showDays: showdata.show.schedule.days,
      showNetwork: showdata.show.network.name,
      showImage: showdata.show.image.medium,
      showSummary: showdata.show.summary.replace(/<[^>]*>/g, '')
    }
  }
}