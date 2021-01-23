import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  url:string ="https://syscalad.com/heroes";

  constructor(private http:HttpClient) { }

   getHeroes(){
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
    });

    const urlheroes = 'heroes/heroes.php';
    // this.http.get(urlheroes, {headers}).subscribe(data=>{
    //   return data;
    // });

    // return this.http.get(urlheroes, {headers});
    return this.http.get(urlheroes, {headers}).pipe(map(data=>{
      return data["data"];
    }));


  }

}
