import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

interface ShowArrayNames {
  show: {
      id: number,
      name: string,
      image: {
          medium: string
      }
  }
}

export class TvMazeArrayService {

  constructor(private httpClient : HttpClient) {}

  getShowInfoArray(showNameEntered: string): Promise<ShowArrayNames[]> {
    return fetch(`https://api.tvmaze.com/search/shows?q=${showNameEntered}`)
      .then(results => results.json())
      .then(results => {
        return results as ShowArrayNames[]
    })
  }
}