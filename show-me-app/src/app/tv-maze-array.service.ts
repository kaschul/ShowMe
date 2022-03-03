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

  populateSelect() {
    var shows : [] = document.getElementById('sel');
    for (var i = 0; i < shows.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + shows[i]['name'] + 
    }
    )
  }
}

window.onload = populateSelect();

function populateSelect() {

    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = `https://api.tvmaze.com/search/shows?q=${userInput}`;        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            
            // PARSE JSON DATA.
            var showOptions = JSON.parse(xhr.responseText);

            var ele = document.getElementById('sel');
            for (var i = 0; i < showOptions.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                ele.innerHTML = ele.innerHTML +
                    '<option value="' + showOptions[i].ID + '">' + showOptions[i].Name + '</option>';
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

function display(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Selected Show: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
        'ID: <b>' + ele.value + '</b>';
}