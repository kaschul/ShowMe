import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ITvMazeData } from './itv-maze-data';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {

  constructor(private httpClient : HttpClient) { }

  getShowInfo(showNameEntered: string){
    return this.httpClient.get<ITvMazeData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showNameEntered}`)
    .pipe(map(data => this.transformToIShowDisplay(data) ))
  }

  private transformToIShowDisplay(data: ITvMazeData){
    return {
      showName: data.name,
      showLanguage: data.language,
      showGenres: data.genres,
      showStatus: data.status,
      showRuntime: data.runtime,
      showTime: data.schedule.time,
      showDays: data.schedule.days,
      showNetwork: data.network.name,
      showImage: data.image.medium,
      showSummary: data.summary.replace(/<[^>]*>/g, '')
    }
  }
}