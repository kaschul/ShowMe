import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ITvMazeData } from './itv-maze-data';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {

  constructor(private httpClient : HttpClient) {}

  getShowInfo(showNameEntered: string){
    return this.httpClient.get<ITvMazeData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showNameEntered}`)
    .pipe(map(data => this.transformToIShowDisplay(data) ))
    }

  private transformToIShowDisplay(showdata: ITvMazeData){
    return {
      showName: showdata.name,
      showLanguage: showdata.language,
      showGenres: showdata.genres.map(x => " " + x),
      showStatus: showdata.status,
      showRuntime: showdata.runtime,
      showTime: showdata.schedule.time,
      showDays: showdata.schedule.days.map(x => " " + x),
      showRating: showdata.rating.average,
      showNetwork: showdata.network.name,
      showImage: showdata.image.medium,
      showSummary: showdata.summary.replace(/<[^>]*>/g, '')
    }
  }
}