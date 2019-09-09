import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ToyInterface from '../interfaces/toy.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  fetchToys(): Observable<ToyInterface[]> {
    return this.http.get<ToyInterface[]>(this.apiUrl)
      .pipe(
        tap(() => console.log('fetched heroes'))
      );
  }
}
